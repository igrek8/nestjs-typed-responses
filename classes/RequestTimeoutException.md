[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / RequestTimeoutException

# Class: RequestTimeoutException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`RequestTimeoutException`**

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](RequestTimeoutException.md#__type)
- [message](RequestTimeoutException.md#message)

### Constructors

- [constructor](RequestTimeoutException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'RequestTimeoutException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:85](https://github.com/igrek8/nestjs-typed-responses/blob/c965990/src/exceptions.ts#L85)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:88](https://github.com/igrek8/nestjs-typed-responses/blob/c965990/src/exceptions.ts#L88)

## Constructors

### constructor

• **new RequestTimeoutException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Request timeout'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:90](https://github.com/igrek8/nestjs-typed-responses/blob/c965990/src/exceptions.ts#L90)
