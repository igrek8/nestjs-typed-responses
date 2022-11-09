[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / ImATeapotException

# Class: ImATeapotException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`ImATeapotException`**

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](ImATeapotException.md#__type)
- [message](ImATeapotException.md#message)

### Constructors

- [constructor](ImATeapotException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'ImATeapotException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:193](https://github.com/igrek8/nestjs-typed-responses/blob/8ebe021/src/exceptions.ts#L193)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:196](https://github.com/igrek8/nestjs-typed-responses/blob/8ebe021/src/exceptions.ts#L196)

## Constructors

### constructor

• **new ImATeapotException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Im a teapot'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:198](https://github.com/igrek8/nestjs-typed-responses/blob/8ebe021/src/exceptions.ts#L198)
