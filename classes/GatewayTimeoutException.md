[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / GatewayTimeoutException

# Class: GatewayTimeoutException

## Hierarchy

- [`HttpException`](HttpException.md)

  ↳ **`GatewayTimeoutException`**

## Implements

- [`TypedDataTransferObject`](../interfaces/TypedDataTransferObject.md)

## Table of contents

### Properties

- [\_\_type](GatewayTimeoutException.md#__type)
- [message](GatewayTimeoutException.md#message)

### Constructors

- [constructor](GatewayTimeoutException.md#constructor)

## Properties

### \_\_type

• **\_\_type**: `string` = `'GatewayTimeoutException'`

#### Implementation of

[TypedDataTransferObject](../interfaces/TypedDataTransferObject.md).[__type](../interfaces/TypedDataTransferObject.md#__type)

#### Overrides

[HttpException](HttpException.md).[__type](HttpException.md#__type)

#### Defined in

[src/exceptions.ts:241](https://github.com/igrek8/nestjs-typed-responses/blob/f215ea0/src/exceptions.ts#L241)

___

### message

• **message**: `string`

#### Overrides

[HttpException](HttpException.md).[message](HttpException.md#message)

#### Defined in

[src/exceptions.ts:244](https://github.com/igrek8/nestjs-typed-responses/blob/f215ea0/src/exceptions.ts#L244)

## Constructors

### constructor

• **new GatewayTimeoutException**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `'Gateway timeout'` |

#### Overrides

[HttpException](HttpException.md).[constructor](HttpException.md#constructor)

#### Defined in

[src/exceptions.ts:246](https://github.com/igrek8/nestjs-typed-responses/blob/f215ea0/src/exceptions.ts#L246)
