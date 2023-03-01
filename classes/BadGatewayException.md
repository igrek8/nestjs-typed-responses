[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / BadGatewayException

# Class: BadGatewayException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`BadGatewayException`**

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](BadGatewayException.md#__type)
- [message](BadGatewayException.md#message)

### Constructors

- [constructor](BadGatewayException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'BadGatewayException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:217](https://github.com/igrek8/nestjs-typed-responses/blob/c965990/src/exceptions.ts#L217)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:220](https://github.com/igrek8/nestjs-typed-responses/blob/c965990/src/exceptions.ts#L220)

## Constructors

### constructor

• **new BadGatewayException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Bad gateway'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:222](https://github.com/igrek8/nestjs-typed-responses/blob/c965990/src/exceptions.ts#L222)
