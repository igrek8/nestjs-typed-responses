[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / HttpException

# Class: HttpException

## Hierarchy

- `HttpException`

  ↳ **`HttpException`**

  ↳↳ [`BadRequestException`](BadRequestException.md)

  ↳↳ [`UnauthorizedException`](UnauthorizedException.md)

  ↳↳ [`NotFoundException`](NotFoundException.md)

  ↳↳ [`ForbiddenException`](ForbiddenException.md)

  ↳↳ [`NotAcceptableException`](NotAcceptableException.md)

  ↳↳ [`RequestTimeoutException`](RequestTimeoutException.md)

  ↳↳ [`ConflictException`](ConflictException.md)

  ↳↳ [`GoneException`](GoneException.md)

  ↳↳ [`HttpVersionNotSupportedException`](HttpVersionNotSupportedException.md)

  ↳↳ [`PayloadTooLargeException`](PayloadTooLargeException.md)

  ↳↳ [`UnsupportedMediaTypeException`](UnsupportedMediaTypeException.md)

  ↳↳ [`UnprocessableEntityException`](UnprocessableEntityException.md)

  ↳↳ [`InternalServerErrorException`](InternalServerErrorException.md)

  ↳↳ [`NotImplementedException`](NotImplementedException.md)

  ↳↳ [`ImATeapotException`](ImATeapotException.md)

  ↳↳ [`MethodNotAllowedException`](MethodNotAllowedException.md)

  ↳↳ [`BadGatewayException`](BadGatewayException.md)

  ↳↳ [`ServiceUnavailableException`](ServiceUnavailableException.md)

  ↳↳ [`GatewayTimeoutException`](GatewayTimeoutException.md)

  ↳↳ [`PreconditionFailedException`](PreconditionFailedException.md)

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](HttpException.md#__type)
- [message](HttpException.md#message)

### Constructors

- [constructor](HttpException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'HttpException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Defined in

[src/exceptions.ts:13](https://github.com/igrek8/nestjs-typed-responses/blob/c965990/src/exceptions.ts#L13)

___

### message

• **message**: `string`

#### Overrides

BaseHttpException.message

#### Defined in

[src/exceptions.ts:16](https://github.com/igrek8/nestjs-typed-responses/blob/c965990/src/exceptions.ts#L16)

## Constructors

### constructor

• **new HttpException**(`message`, `status`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `status` | `HttpStatus` |

#### Overrides

BaseHttpException.constructor

#### Defined in

[src/exceptions.ts:18](https://github.com/igrek8/nestjs-typed-responses/blob/c965990/src/exceptions.ts#L18)
