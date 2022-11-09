[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / UnauthorizedException

# Class: UnauthorizedException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`UnauthorizedException`**

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](UnauthorizedException.md#__type)
- [message](UnauthorizedException.md#message)

### Constructors

- [constructor](UnauthorizedException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'UnauthorizedException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:37](https://github.com/igrek8/nestjs-typed-responses/blob/f215ea0/src/exceptions.ts#L37)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:40](https://github.com/igrek8/nestjs-typed-responses/blob/f215ea0/src/exceptions.ts#L40)

## Constructors

### constructor

• **new UnauthorizedException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Unauthorized'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:42](https://github.com/igrek8/nestjs-typed-responses/blob/f215ea0/src/exceptions.ts#L42)
