[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / MethodNotAllowedException

# Class: MethodNotAllowedException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`MethodNotAllowedException`**

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](MethodNotAllowedException.md#__type)
- [message](MethodNotAllowedException.md#message)

### Constructors

- [constructor](MethodNotAllowedException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'MethodNotAllowedException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:205](https://github.com/igrek8/nestjs-typed-responses/blob/8ebe021/src/exceptions.ts#L205)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:208](https://github.com/igrek8/nestjs-typed-responses/blob/8ebe021/src/exceptions.ts#L208)

## Constructors

### constructor

• **new MethodNotAllowedException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Method not allowed'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:210](https://github.com/igrek8/nestjs-typed-responses/blob/8ebe021/src/exceptions.ts#L210)
