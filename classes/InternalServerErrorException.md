[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / InternalServerErrorException

# Class: InternalServerErrorException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`InternalServerErrorException`**

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](InternalServerErrorException.md#__type)
- [message](InternalServerErrorException.md#message)

### Constructors

- [constructor](InternalServerErrorException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'InternalServerErrorException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:169](https://github.com/igrek8/nestjs-typed-responses/blob/e755f00/src/exceptions.ts#L169)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:172](https://github.com/igrek8/nestjs-typed-responses/blob/e755f00/src/exceptions.ts#L172)

## Constructors

### constructor

• **new InternalServerErrorException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Internal server error'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:174](https://github.com/igrek8/nestjs-typed-responses/blob/e755f00/src/exceptions.ts#L174)
