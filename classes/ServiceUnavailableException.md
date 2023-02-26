[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / ServiceUnavailableException

# Class: ServiceUnavailableException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`ServiceUnavailableException`**

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](ServiceUnavailableException.md#__type)
- [message](ServiceUnavailableException.md#message)

### Constructors

- [constructor](ServiceUnavailableException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'ServiceUnavailableException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:229](https://github.com/igrek8/nestjs-typed-responses/blob/cc7b0a6/src/exceptions.ts#L229)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:232](https://github.com/igrek8/nestjs-typed-responses/blob/cc7b0a6/src/exceptions.ts#L232)

## Constructors

### constructor

• **new ServiceUnavailableException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Service unavailable'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:234](https://github.com/igrek8/nestjs-typed-responses/blob/cc7b0a6/src/exceptions.ts#L234)
