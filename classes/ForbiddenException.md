[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / ForbiddenException

# Class: ForbiddenException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`ForbiddenException`**

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](ForbiddenException.md#__type)
- [message](ForbiddenException.md#message)

### Constructors

- [constructor](ForbiddenException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'ForbiddenException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:61](https://github.com/igrek8/nestjs-typed-responses/blob/9265976/src/exceptions.ts#L61)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:64](https://github.com/igrek8/nestjs-typed-responses/blob/9265976/src/exceptions.ts#L64)

## Constructors

### constructor

• **new ForbiddenException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Forbidden'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:66](https://github.com/igrek8/nestjs-typed-responses/blob/9265976/src/exceptions.ts#L66)
