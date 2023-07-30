import {
  ArgumentsHost,
  HttpException as BaseHttpException,
  Catch,
  HttpStatus,
  ExceptionFilter as IExceptionFilter,
  Inject,
  Logger,
  Optional,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { ClassTransformOptions, instanceToPlain } from 'class-transformer';
import { Response } from 'express';
import { HttpException, InternalServerErrorException } from './exceptions';
import { isErrorResponse } from './is-error-response';
import { MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } from './typed-response.module-definition';

@Catch()
export class ExceptionFilter implements IExceptionFilter {
  protected readonly logger = new Logger(ExceptionFilter.name);

  constructor(
    protected readonly httpAdapterHost: HttpAdapterHost,
    @Optional()
    @Inject(MODULE_OPTIONS_TOKEN)
    protected readonly options: typeof OPTIONS_TYPE = {}
  ) {}

  protected static readonly defaultTransformError = () => {
    return new InternalServerErrorException();
  };

  protected static readonly defaultTransformErrorOptions: ClassTransformOptions = {
    strategy: 'excludeAll',
  };

  catch(error: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();

    const { transformError = ExceptionFilter.defaultTransformError } = this.options;

    const transformErrorOptions = {
      ...ExceptionFilter.defaultTransformErrorOptions,
      ...this.options.transformErrorOptions,
    };

    let httpStatus: HttpStatus;
    let httpResponseBody: Record<string, unknown> | undefined;

    if (error instanceof HttpException) {
      httpStatus = error.getStatus();
      httpResponseBody = instanceToPlain(error, transformErrorOptions);
    } else if (error instanceof BaseHttpException) {
      httpStatus = error.getStatus();
      httpResponseBody = { __type: error.name };
      const response = error.getResponse();
      if (typeof response === 'string') {
        httpResponseBody['message'] = response;
      } else if (isErrorResponse(response)) {
        httpResponseBody['message'] = response['message'];
      }
    } else {
      if (error instanceof Error) {
        this.logger.error(error.message, error.stack);
      }
      const httpException = transformError(error);
      httpStatus = httpException.getStatus();
      httpResponseBody = instanceToPlain(httpException, transformErrorOptions);
    }

    this.httpAdapterHost.httpAdapter.reply(res, httpResponseBody, httpStatus);
  }
}
