import { instanceToPlain, plainToInstance } from 'class-transformer';
import { IsPositive, validateSync } from 'class-validator';
import { ValidationException } from './validation-exception';

class TestPayload {
  @IsPositive()
  @IsPositive()
  age!: number;

  constructor(props: TestPayload) {
    Object.assign(this, props);
  }
}

describe('ValidationException', () => {
  it('serializes to typed response', () => {
    const errors = validateSync(plainToInstance(TestPayload, { age: -100 }));
    expect(instanceToPlain(ValidationException.exceptionFactory(errors), { strategy: 'excludeAll' })).toEqual({
      __type: 'ValidationException',
      message: 'The request was rejected due to problems in the request body',
      problems: ['age must be a positive number'],
    });
  });
});
