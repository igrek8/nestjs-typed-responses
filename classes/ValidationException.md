[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / ValidationException

# Class: ValidationException

## Hierarchy

- [`BadRequestException`](BadRequestException.md)

  ↳ **`ValidationException`**

## Table of contents

### Properties

- [\_\_type](ValidationException.md#__type)
- [message](ValidationException.md#message)
- [problems](ValidationException.md#problems)

### Constructors

- [constructor](ValidationException.md#constructor)

### Methods

- [exceptionFactory](ValidationException.md#exceptionfactory)

## Properties

### \_\_type

• **\_\_type**: `string` = `'ValidationException'`

#### Overrides

[BadRequestException](BadRequestException.md).[__type](BadRequestException.md#__type)

#### Defined in

[src/validation-exception.ts:11](https://github.com/igrek8/nestjs-typed-responses/blob/c965990/src/validation-exception.ts#L11)

___

### message

• **message**: `string`

#### Inherited from

[BadRequestException](BadRequestException.md).[message](BadRequestException.md#message)

#### Defined in

[src/exceptions.ts:28](https://github.com/igrek8/nestjs-typed-responses/blob/c965990/src/exceptions.ts#L28)

___

### problems

• **problems**: `string`[]

#### Defined in

[src/validation-exception.ts:17](https://github.com/igrek8/nestjs-typed-responses/blob/c965990/src/validation-exception.ts#L17)

## Constructors

### constructor

• **new ValidationException**(`problems`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `problems` | `string`[] |

#### Overrides

[BadRequestException](BadRequestException.md).[constructor](BadRequestException.md#constructor)

#### Defined in

[src/validation-exception.ts:19](https://github.com/igrek8/nestjs-typed-responses/blob/c965990/src/validation-exception.ts#L19)

## Methods

### exceptionFactory

▸ `Static` **exceptionFactory**(`errors`): [`ValidationException`](ValidationException.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `errors` | `ValidationError`[] |

#### Returns

[`ValidationException`](ValidationException.md)

#### Defined in

[src/validation-exception.ts:24](https://github.com/igrek8/nestjs-typed-responses/blob/c965990/src/validation-exception.ts#L24)
