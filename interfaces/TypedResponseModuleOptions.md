[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / TypedResponseModuleOptions

# Interface: TypedResponseModuleOptions

## Table of contents

### Methods

- [transformError](TypedResponseModuleOptions.md#transformerror)

### Properties

- [transformErrorOptions](TypedResponseModuleOptions.md#transformerroroptions)

## Methods

### transformError

▸ `Optional` **transformError**(`error`): [`HttpException`](../classes/HttpException.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |

#### Returns

[`HttpException`](../classes/HttpException.md)

#### Defined in

[src/typed-response.module-options.ts:5](https://github.com/igrek8/nestjs-typed-responses/blob/cc7b0a6/src/typed-response.module-options.ts#L5)

## Properties

### transformErrorOptions

• `Optional` **transformErrorOptions**: `ClassTransformOptions`

#### Defined in

[src/typed-response.module-options.ts:6](https://github.com/igrek8/nestjs-typed-responses/blob/cc7b0a6/src/typed-response.module-options.ts#L6)
