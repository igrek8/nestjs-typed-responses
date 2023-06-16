[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / UnprocessableEntityException

# Class: UnprocessableEntityException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`UnprocessableEntityException`**

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](UnprocessableEntityException.md#__type)
- [message](UnprocessableEntityException.md#message)

### Constructors

- [constructor](UnprocessableEntityException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'UnprocessableEntityException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:157](https://github.com/igrek8/nestjs-typed-responses/blob/f5d28a2/src/exceptions.ts#L157)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:160](https://github.com/igrek8/nestjs-typed-responses/blob/f5d28a2/src/exceptions.ts#L160)

## Constructors

### constructor

• **new UnprocessableEntityException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Unprocessable entity'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:162](https://github.com/igrek8/nestjs-typed-responses/blob/f5d28a2/src/exceptions.ts#L162)
