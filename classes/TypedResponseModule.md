[nestjs-typed-responses](../README.md) / [Exports](../modules.md) / TypedResponseModule

# Class: TypedResponseModule

## Hierarchy

- `ConfigurableModuleClass`

  ↳ **`TypedResponseModule`**

## Implements

- `NestModule`

## Table of contents

### Constructors

- [constructor](TypedResponseModule.md#constructor)

### Properties

- [register](TypedResponseModule.md#register)
- [registerAsync](TypedResponseModule.md#registerasync)

## Constructors

### constructor

• **new TypedResponseModule**()

#### Inherited from

ConfigurableModuleClass.constructor

#### Defined in

node_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12

## Properties

### register

▪ `Static` **register**: (`options`: `TypedResponseModuleOptions` & `Partial`<{}\>) => `DynamicModule`

#### Type declaration

▸ (`options`): `DynamicModule`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `TypedResponseModuleOptions` & `Partial`<{}\> |

##### Returns

`DynamicModule`

#### Inherited from

ConfigurableModuleClass.register

___

### registerAsync

▪ `Static` **registerAsync**: (`options`: `ConfigurableModuleAsyncOptions`<`TypedResponseModuleOptions`, ``"create"``\> & `Partial`<{}\>) => `DynamicModule`

#### Type declaration

▸ (`options`): `DynamicModule`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConfigurableModuleAsyncOptions`<`TypedResponseModuleOptions`, ``"create"``\> & `Partial`<{}\> |

##### Returns

`DynamicModule`

#### Inherited from

ConfigurableModuleClass.registerAsync
