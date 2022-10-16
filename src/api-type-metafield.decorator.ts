import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsDefined, IsString } from 'class-validator';

const description = 'A meta field to resolve polymorphic payload';

export function ApiTypeMetafield(type: string) {
  return applyDecorators(ApiProperty({ enum: [type], default: type, description }), Expose(), IsString(), IsDefined());
}
