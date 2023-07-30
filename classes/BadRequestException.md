[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / BadRequestException

# Class: BadRequestException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`BadRequestException`**

  ↳↳ [`ValidationException`](ValidationException.md)

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](BadRequestException.md#__type)
- [message](BadRequestException.md#message)

### Constructors

- [constructor](BadRequestException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'BadRequestException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:25](https://github.com/igrek8/nestjs-typed-responses/blob/a6709d2/src/exceptions.ts#L25)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:28](https://github.com/igrek8/nestjs-typed-responses/blob/a6709d2/src/exceptions.ts#L28)

## Constructors

### constructor

• **new BadRequestException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Bad request'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:30](https://github.com/igrek8/nestjs-typed-responses/blob/a6709d2/src/exceptions.ts#L30)
