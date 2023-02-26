[nestjs-typed-responses](README.md) / Exports

# nestjs-typed-responses

## Table of contents

### Functions

- [ApiTypeMetafield](modules.md#apitypemetafield)
- [collectValidationErrors](modules.md#collectvalidationerrors)

### Classes

- [BadGatewayException](classes/BadGatewayException.md)
- [BadRequestException](classes/BadRequestException.md)
- [ConflictException](classes/ConflictException.md)
- [ForbiddenException](classes/ForbiddenException.md)
- [GatewayTimeoutException](classes/GatewayTimeoutException.md)
- [GoneException](classes/GoneException.md)
- [HttpException](classes/HttpException.md)
- [HttpVersionNotSupportedException](classes/HttpVersionNotSupportedException.md)
- [ImATeapotException](classes/ImATeapotException.md)
- [InternalServerErrorException](classes/InternalServerErrorException.md)
- [MethodNotAllowedException](classes/MethodNotAllowedException.md)
- [NotAcceptableException](classes/NotAcceptableException.md)
- [NotFoundException](classes/NotFoundException.md)
- [NotImplementedException](classes/NotImplementedException.md)
- [PayloadTooLargeException](classes/PayloadTooLargeException.md)
- [PreconditionFailedException](classes/PreconditionFailedException.md)
- [RequestTimeoutException](classes/RequestTimeoutException.md)
- [ServiceUnavailableException](classes/ServiceUnavailableException.md)
- [TypedResponseModule](classes/TypedResponseModule.md)
- [UnauthorizedException](classes/UnauthorizedException.md)
- [UnprocessableEntityException](classes/UnprocessableEntityException.md)
- [UnsupportedMediaTypeException](classes/UnsupportedMediaTypeException.md)
- [ValidationException](classes/ValidationException.md)

### Interfaces

- [TypedDataTransferObject](interfaces/TypedDataTransferObject.md)
- [TypedResponseModuleOptions](interfaces/TypedResponseModuleOptions.md)

## Functions

### ApiTypeMetafield

▸ **ApiTypeMetafield**(`type`): <TFunction, Y\>(`target`: `object` \| `TFunction`, `propertyKey?`: `string` \| `symbol`, `descriptor?`: `TypedPropertyDescriptor`<`Y`\>) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`fn`

▸ <`TFunction`, `Y`\>(`target`, `propertyKey?`, `descriptor?`): `void`

Function that returns a new decorator that applies all decorators provided by param

Useful to build new decorators (or a decorator factory) encapsulating multiple decorators related with the same feature

**`Public Api`**

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TFunction` | extends `Function` |
| `Y` | `Y` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` \| `TFunction` |
| `propertyKey?` | `string` \| `symbol` |
| `descriptor?` | `TypedPropertyDescriptor`<`Y`\> |

##### Returns

`void`

#### Defined in

[src/api-type-metafield.decorator.ts:8](https://github.com/igrek8/nestjs-typed-responses/blob/cc7b0a6/src/api-type-metafield.decorator.ts#L8)

___

### collectValidationErrors

▸ **collectValidationErrors**(`errors`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `errors` | `ValidationError`[] |

#### Returns

`string`[]

#### Defined in

[src/collect-validation-errors.ts:14](https://github.com/igrek8/nestjs-typed-responses/blob/cc7b0a6/src/collect-validation-errors.ts#L14)
