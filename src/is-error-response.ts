import type { DeepPartial } from 'utility-types';
import type { ErrorResponse } from './error-response.interface';

export function isErrorResponse(value: unknown): value is ErrorResponse {
  if (value !== null && typeof value === 'object') {
    const error = value as DeepPartial<ErrorResponse>;
    return typeof error.message === 'string';
  }
  return false;
}
