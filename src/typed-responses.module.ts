import { ClassSerializerInterceptor, Module, NestModule } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ExceptionFilter } from './exception-filter';
import { ConfigurableModuleClass } from './typed-response.module-definition';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: ExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class TypedResponseModule extends ConfigurableModuleClass implements NestModule {}
