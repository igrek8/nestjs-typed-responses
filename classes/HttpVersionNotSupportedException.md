[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / HttpVersionNotSupportedException

# Class: HttpVersionNotSupportedException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`HttpVersionNotSupportedException`**

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](HttpVersionNotSupportedException.md#__type)
- [message](HttpVersionNotSupportedException.md#message)

### Constructors

- [constructor](HttpVersionNotSupportedException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'HttpVersionNotSupportedException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:121](https://github.com/igrek8/nestjs-typed-responses/blob/84f62b4/src/exceptions.ts#L121)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:124](https://github.com/igrek8/nestjs-typed-responses/blob/84f62b4/src/exceptions.ts#L124)

## Constructors

### constructor

• **new HttpVersionNotSupportedException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Http version not supported'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:126](https://github.com/igrek8/nestjs-typed-responses/blob/84f62b4/src/exceptions.ts#L126)
