[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / NotFoundException

# Class: NotFoundException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`NotFoundException`**

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](NotFoundException.md#__type)
- [message](NotFoundException.md#message)

### Constructors

- [constructor](NotFoundException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'NotFoundException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:49](https://github.com/igrek8/nestjs-typed-responses/blob/a6709d2/src/exceptions.ts#L49)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:52](https://github.com/igrek8/nestjs-typed-responses/blob/a6709d2/src/exceptions.ts#L52)

## Constructors

### constructor

• **new NotFoundException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Not found'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:54](https://github.com/igrek8/nestjs-typed-responses/blob/a6709d2/src/exceptions.ts#L54)
