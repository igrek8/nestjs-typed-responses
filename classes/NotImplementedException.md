[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / NotImplementedException

# Class: NotImplementedException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`NotImplementedException`**

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](NotImplementedException.md#__type)
- [message](NotImplementedException.md#message)

### Constructors

- [constructor](NotImplementedException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'NotImplementedException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:181](https://github.com/igrek8/nestjs-typed-responses/blob/e755f00/src/exceptions.ts#L181)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:184](https://github.com/igrek8/nestjs-typed-responses/blob/e755f00/src/exceptions.ts#L184)

## Constructors

### constructor

• **new NotImplementedException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Not implemented'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:186](https://github.com/igrek8/nestjs-typed-responses/blob/e755f00/src/exceptions.ts#L186)
