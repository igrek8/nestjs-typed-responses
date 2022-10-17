import {
  ArgumentsHost,
  Catch,
  ExceptionFilter as IExceptionFilter,
  HttpException as BaseHttpException,
  HttpStatus,
  Inject,
  LoggerService,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { ClassTransformOptions, instanceToPlain } from 'class-transformer';
import { Response } from 'express';
import { HttpException } from './exceptions';
import { MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } from './typed-response.module-definition';

function hasMessage(obj: unknown): obj is { message: string } {
  return obj !== null && typeof obj === 'object' && typeof (obj as Record<string, unknown>)['message'] === 'string';
}

const transformErrorOptions: ClassTransformOptions = {
  strategy: 'excludeAll',
};

@Catch()
export class ExceptionFilter implements IExceptionFilter {
  constructor(
    protected readonly httpAdapterHost: HttpAdapterHost,
    @Inject(MODULE_OPTIONS_TOKEN) protected readonly options: typeof OPTIONS_TYPE,
    @Inject('APP_LOGGER') protected readonly logger: LoggerService
  ) {}

  catch(error: unknown, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let payload: Record<string, unknown> | undefined;

    if (error instanceof HttpException) {
      status = error.getStatus();
      payload = instanceToPlain(error, { ...transformErrorOptions, ...this.options.transformErrorOptions });
    } else if (error instanceof BaseHttpException) {
      status = error.getStatus();
      payload = { __type: error.name };
      const response = error.getResponse();
      if (typeof response === 'string') {
        payload['message'] = response;
      } else if (hasMessage(response)) {
        payload['message'] = response['message'];
      }
    } else {
      payload = {
        __type: 'InternalServerErrorException',
        message: 'Internal server error',
      };
      if (error instanceof Error) {
        this.logger.error(error.message, error.stack, 'ExceptionFilter');
      }
    }

    httpAdapter.reply(res, payload, status);
  }
}
