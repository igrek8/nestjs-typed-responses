import { applyDecorators, HttpException as BaseHttpException, HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsDefined } from 'class-validator';
import { ApiTypeMetafield } from './api-type-metafield.decorator';
import { TypedDataTransferObject } from './typed-data-transfer-object';

const ApiExceptionMessage = () =>
  applyDecorators(ApiProperty({ description: 'Message containing error details' }), Expose(), IsDefined());

export class HttpException extends BaseHttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('HttpException')
  __type = 'HttpException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message: string, status: HttpStatus) {
    super(message, status);
  }
}

export class BadRequestException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('BadRequestException')
  override __type = 'BadRequestException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Bad request') {
    super(message, HttpStatus.BAD_REQUEST);
  }
}

export class UnauthorizedException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('UnauthorizedException')
  override __type = 'UnauthorizedException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Unauthorized') {
    super(message, HttpStatus.UNAUTHORIZED);
  }
}

export class NotFoundException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('NotFoundException')
  override __type = 'NotFoundException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Not found') {
    super(message, HttpStatus.NOT_FOUND);
  }
}

export class ForbiddenException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('ForbiddenException')
  override __type = 'ForbiddenException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Forbidden') {
    super(message, HttpStatus.FORBIDDEN);
  }
}

export class NotAcceptableException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('NotAcceptableException')
  override __type = 'NotAcceptableException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Not acceptable') {
    super(message, HttpStatus.NOT_ACCEPTABLE);
  }
}

export class RequestTimeoutException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('RequestTimeoutException')
  override __type = 'RequestTimeoutException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Request timeout') {
    super(message, HttpStatus.REQUEST_TIMEOUT);
  }
}

export class ConflictException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('ConflictException')
  override __type = 'ConflictException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Conflict') {
    super(message, HttpStatus.CONFLICT);
  }
}

export class GoneException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('GoneException')
  override __type = 'GoneException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Gone') {
    super(message, HttpStatus.GONE);
  }
}

export class HttpVersionNotSupportedException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('HttpVersionNotSupportedException')
  override __type = 'HttpVersionNotSupportedException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Http version not supported') {
    super(message, HttpStatus.HTTP_VERSION_NOT_SUPPORTED);
  }
}

export class PayloadTooLargeException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('PayloadTooLargeException')
  override __type = 'PayloadTooLargeException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Payload too large') {
    super(message, HttpStatus.PAYLOAD_TOO_LARGE);
  }
}

export class UnsupportedMediaTypeException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('UnsupportedMediaTypeException')
  override __type = 'UnsupportedMediaTypeException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Unsupported media type') {
    super(message, HttpStatus.UNSUPPORTED_MEDIA_TYPE);
  }
}

export class UnprocessableEntityException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('UnprocessableEntityException')
  override __type = 'UnprocessableEntityException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Unprocessable entity') {
    super(message, HttpStatus.UNPROCESSABLE_ENTITY);
  }
}

export class InternalServerErrorException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('InternalServerErrorException')
  override __type = 'InternalServerErrorException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Internal server error') {
    super(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

export class NotImplementedException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('NotImplementedException')
  override __type = 'NotImplementedException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Not implemented') {
    super(message, HttpStatus.NOT_IMPLEMENTED);
  }
}

export class ImATeapotException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('ImATeapotException')
  override __type = 'ImATeapotException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Im a teapot') {
    super(message, HttpStatus.I_AM_A_TEAPOT);
  }
}

export class MethodNotAllowedException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('MethodNotAllowedException')
  override __type = 'MethodNotAllowedException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Method not allowed') {
    super(message, HttpStatus.METHOD_NOT_ALLOWED);
  }
}

export class BadGatewayException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('BadGatewayException')
  override __type = 'BadGatewayException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Bad gateway') {
    super(message, HttpStatus.BAD_GATEWAY);
  }
}

export class ServiceUnavailableException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('ServiceUnavailableException')
  override __type = 'ServiceUnavailableException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Service unavailable') {
    super(message, HttpStatus.SERVICE_UNAVAILABLE);
  }
}

export class GatewayTimeoutException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('GatewayTimeoutException')
  override __type = 'GatewayTimeoutException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Gateway timeout') {
    super(message, HttpStatus.GATEWAY_TIMEOUT);
  }
}

export class PreconditionFailedException extends HttpException implements TypedDataTransferObject {
  @ApiTypeMetafield('PreconditionFailedException')
  override __type = 'PreconditionFailedException';

  @ApiExceptionMessage()
  override message!: string;

  constructor(message = 'Precondition failed') {
    super(message, HttpStatus.PRECONDITION_FAILED);
  }
}
