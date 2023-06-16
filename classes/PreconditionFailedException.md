[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / PreconditionFailedException

# Class: PreconditionFailedException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`PreconditionFailedException`**

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](PreconditionFailedException.md#__type)
- [message](PreconditionFailedException.md#message)

### Constructors

- [constructor](PreconditionFailedException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'PreconditionFailedException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:253](https://github.com/igrek8/nestjs-typed-responses/blob/9265976/src/exceptions.ts#L253)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:256](https://github.com/igrek8/nestjs-typed-responses/blob/9265976/src/exceptions.ts#L256)

## Constructors

### constructor

• **new PreconditionFailedException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Precondition failed'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:258](https://github.com/igrek8/nestjs-typed-responses/blob/9265976/src/exceptions.ts#L258)
