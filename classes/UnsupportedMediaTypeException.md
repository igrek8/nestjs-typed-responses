[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / UnsupportedMediaTypeException

# Class: UnsupportedMediaTypeException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`UnsupportedMediaTypeException`**

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](UnsupportedMediaTypeException.md#__type)
- [message](UnsupportedMediaTypeException.md#message)

### Constructors

- [constructor](UnsupportedMediaTypeException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'UnsupportedMediaTypeException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:145](https://github.com/igrek8/nestjs-typed-responses/blob/f5d28a2/src/exceptions.ts#L145)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:148](https://github.com/igrek8/nestjs-typed-responses/blob/f5d28a2/src/exceptions.ts#L148)

## Constructors

### constructor

• **new UnsupportedMediaTypeException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Unsupported media type'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:150](https://github.com/igrek8/nestjs-typed-responses/blob/f5d28a2/src/exceptions.ts#L150)
