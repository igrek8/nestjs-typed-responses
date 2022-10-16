import { ValidationError } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsDefined, IsString } from 'class-validator';
import { ApiTypeMetafield } from './api-type-metafield.decorator';
import { collectValidationErrors } from './collect-validation-errors';
import { BadRequestException } from './exceptions';

export class ValidationException extends BadRequestException {
  @ApiTypeMetafield('ValidationException')
  override __type = 'ValidationException';

  @ApiProperty({ type: [String], description: 'List of problems in the body of the request' })
  @Expose()
  @IsString({ each: true })
  @IsDefined()
  problems!: string[];

  constructor(problems: string[]) {
    super('The request was rejected due to problems in the request body');
    this.problems = problems;
  }

  static exceptionFactory(errors: ValidationError[]) {
    return new ValidationException(collectValidationErrors(errors));
  }
}
