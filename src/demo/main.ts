import { Controller, HttpCode, HttpStatus, Module, Post, ValidationPipe } from '@nestjs/common';
import { APP_PIPE, NestFactory } from '@nestjs/core';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiProperty,
  ApiServiceUnavailableResponse,
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';
import { strict as assert } from 'assert';
import { Expose } from 'class-transformer';
import { IsDateString, IsString } from 'class-validator';
import {
  ApiTypeMetafield,
  ServiceUnavailableException,
  TypedDataTransferObject,
  TypedResponseModule,
  ValidationException,
} from '..';

class MyResponse implements TypedDataTransferObject {
  // ApiTypeMetafield must be defined to specify serializable type
  @ApiTypeMetafield('MyResponse')
  __type = 'MyResponse';

  // It is not required to apply @Expose decorator (per configuration)
  @ApiProperty()
  @IsString()
  data!: string;

  constructor(props: Omit<MyResponse, '__type'>) {
    Object.assign(this, props);
  }
}

class MaintenanceException extends ServiceUnavailableException implements TypedDataTransferObject {
  // ApiTypeMetafield must be defined to specify serializable type
  @ApiTypeMetafield('MaintenanceException')
  override __type = 'MaintenanceException';

  // @Expose must be used explicitly in error classes as only such fields will be exposed
  @Expose()
  @ApiProperty({
    example: '2022-12-31T11:00:00.000Z',
    description: 'There is a maintenance on the server',
  })
  @IsDateString()
  operationalAt!: Date;
}

@Controller()
@ApiExtraModels(MaintenanceException)
class AppController {
  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: MyResponse })
  @ApiServiceUnavailableResponse({ type: MaintenanceException })
  // Polymorphism https://swagger.io/docs/specification/data-models/inheritance-and-polymorphism/
  demo(): MyResponse {
    assert(Math.random() > 0.5, new MaintenanceException());
    return new MyResponse({ data: 'Hello!' });
  }
}

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        exceptionFactory: ValidationException.exceptionFactory,
      }),
    },
  ],
  imports: [TypedResponseModule],
  controllers: [AppController],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  await app.listen(3000);
}

bootstrap();
