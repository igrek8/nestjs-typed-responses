[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / ConflictException

# Class: ConflictException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`ConflictException`**

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](ConflictException.md#__type)
- [message](ConflictException.md#message)

### Constructors

- [constructor](ConflictException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'ConflictException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:97](https://github.com/igrek8/nestjs-typed-responses/blob/e755f00/src/exceptions.ts#L97)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:100](https://github.com/igrek8/nestjs-typed-responses/blob/e755f00/src/exceptions.ts#L100)

## Constructors

### constructor

• **new ConflictException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Conflict'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:102](https://github.com/igrek8/nestjs-typed-responses/blob/e755f00/src/exceptions.ts#L102)
