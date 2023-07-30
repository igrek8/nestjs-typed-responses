[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / NotAcceptableException

# Class: NotAcceptableException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`NotAcceptableException`**

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](NotAcceptableException.md#__type)
- [message](NotAcceptableException.md#message)

### Constructors

- [constructor](NotAcceptableException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'NotAcceptableException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:73](https://github.com/igrek8/nestjs-typed-responses/blob/a6709d2/src/exceptions.ts#L73)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:76](https://github.com/igrek8/nestjs-typed-responses/blob/a6709d2/src/exceptions.ts#L76)

## Constructors

### constructor

• **new NotAcceptableException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Not acceptable'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:78](https://github.com/igrek8/nestjs-typed-responses/blob/a6709d2/src/exceptions.ts#L78)
