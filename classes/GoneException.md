[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / GoneException

# Class: GoneException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`GoneException`**

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](GoneException.md#__type)
- [message](GoneException.md#message)

### Constructors

- [constructor](GoneException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'GoneException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:109](https://github.com/igrek8/nestjs-typed-responses/blob/a6709d2/src/exceptions.ts#L109)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:112](https://github.com/igrek8/nestjs-typed-responses/blob/a6709d2/src/exceptions.ts#L112)

## Constructors

### constructor

• **new GoneException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Gone'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:114](https://github.com/igrek8/nestjs-typed-responses/blob/a6709d2/src/exceptions.ts#L114)
