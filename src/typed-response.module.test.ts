import {
  Body,
  ConsoleLogger,
  Controller,
  HttpException,
  HttpStatus,
  INestApplication,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { Test } from '@nestjs/testing';
import { IsString } from 'class-validator';
import request from 'supertest';
import { ApiTypeMetafield } from './api-type-metafield.decorator';
import { BadRequestException } from './exceptions';
import { TypedDataTransferObject } from './typed-data-transfer-object';
import { TypedResponseModule } from './typed-responses.module';
import { ValidationException } from './validation-exception';

jest.useFakeTimers();

class EchoRequest {
  @IsString()
  message!: string;
}

class EchoResponse implements TypedDataTransferObject {
  @ApiTypeMetafield('EchoResponse')
  __type = 'EchoResponse';

  @IsString()
  echo!: string;

  constructor(props: Partial<EchoResponse>) {
    Object.assign(this, props);
  }
}

const createResponse = jest.fn((body: EchoRequest) => {
  return new EchoResponse({
    echo: body.message,
  });
});

@Controller()
class TestController {
  @Post()
  @ApiCreatedResponse({ type: EchoResponse })
  @ApiBadRequestResponse({ type: BadRequestException })
  test(@Body() req: EchoRequest): EchoResponse {
    return createResponse(req);
  }
}

describe('TypedResponseModule', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: APP_PIPE,
          useValue: new ValidationPipe({
            exceptionFactory: ValidationException.exceptionFactory,
          }),
        },
      ],
      imports: [
        TypedResponseModule.registerAsync({
          inject: ['APP_LOGGER'],
          provideInjectionTokensFrom: [
            {
              provide: 'APP_LOGGER',
              useClass: ConsoleLogger,
            },
          ],
          useFactory: () => ({}),
        }),
      ],
      controllers: [TestController],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.listen(50000);
  });

  afterAll(async () => {
    await app.close();
  });

  it('returns json with __type field', async () => {
    createResponse.mockReturnValue(new EchoResponse({ echo: 'pong' }));
    const res = await request(app.getHttpServer()).post('/').send({ message: 'ping' });
    expect(res.body).toEqual({ __type: 'EchoResponse', echo: 'pong' });
  });

  it('returns validation error with __type field', async () => {
    const res = await request(app.getHttpServer()).post('/');
    expect(res.body).toEqual({
      __type: 'ValidationException',
      message: 'The request was rejected due to problems in the request body',
      problems: ['message must be a string'],
    });
  });

  it('serializes initial object nest.js exceptions', async () => {
    const res = await request(app.getHttpServer()).get('/');
    expect(res.body).toMatchObject({ __type: 'NotFoundException', message: 'Cannot GET /' });
  });

  it('serializes initial string nest.js exceptions', async () => {
    createResponse.mockImplementation(() => {
      throw new HttpException('Remote server is down', HttpStatus.BAD_GATEWAY);
    });
    const res = await request(app.getHttpServer()).post('/').send({ message: 'ping' });
    expect(res.body).toMatchObject({ __type: 'HttpException', message: 'Remote server is down' });
  });

  it('serializes generic error and logs it', async () => {
    const log = jest.spyOn(ConsoleLogger.prototype, 'error');
    log.mockImplementation(() => {});
    const error = new Error('Some error');
    createResponse.mockImplementation(() => {
      throw error;
    });
    const res = await request(app.getHttpServer()).post('/').send({ message: 'ping' });
    expect(res.body).toMatchObject({ __type: 'InternalServerErrorException', message: 'Internal server error' });
    expect(log).toHaveBeenCalledWith(error.message, error.stack, 'ExceptionFilter');
  });
});
