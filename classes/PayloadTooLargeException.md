[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / PayloadTooLargeException

# Class: PayloadTooLargeException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`PayloadTooLargeException`**

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](PayloadTooLargeException.md#__type)
- [message](PayloadTooLargeException.md#message)

### Constructors

- [constructor](PayloadTooLargeException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'PayloadTooLargeException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:133](https://github.com/igrek8/nestjs-typed-responses/blob/84f62b4/src/exceptions.ts#L133)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:136](https://github.com/igrek8/nestjs-typed-responses/blob/84f62b4/src/exceptions.ts#L136)

## Constructors

### constructor

• **new PayloadTooLargeException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Payload too large'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:138](https://github.com/igrek8/nestjs-typed-responses/blob/84f62b4/src/exceptions.ts#L138)
