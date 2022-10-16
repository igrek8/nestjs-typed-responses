import { instanceToPlain } from 'class-transformer';
import * as exceptions from './exceptions';

describe('exceptions', () => {
  it.each([
    'BadRequestException',
    'UnauthorizedException',
    'NotFoundException',
    'ForbiddenException',
    'NotAcceptableException',
    'RequestTimeoutException',
    'ConflictException',
    'GoneException',
    'HttpVersionNotSupportedException',
    'PayloadTooLargeException',
    'UnsupportedMediaTypeException',
    'UnprocessableEntityException',
    'InternalServerErrorException',
    'NotImplementedException',
    'ImATeapotException',
    'MethodNotAllowedException',
    'BadGatewayException',
    'ServiceUnavailableException',
    'GatewayTimeoutException',
    'PreconditionFailedException',
  ] as const)('exception %s', (__type) => {
    expect(instanceToPlain(new exceptions[__type](), { strategy: 'excludeAll' })).toMatchObject({
      __type,
      message: expect.any(String),
    });
  });
});
