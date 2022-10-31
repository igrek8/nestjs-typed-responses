import { isErrorResponse } from './is-error-response';

describe('isErrorResponse', () => {
  it('narrows type to ErrorResponse', () => {
    expect(isErrorResponse({ message: 'test' })).toBe(true);
    expect(isErrorResponse('test')).toBe(false);
  });
});
