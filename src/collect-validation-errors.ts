import { ValidationError } from '@nestjs/common';

function next(parent: ValidationError, path: string | null, messages: string[]) {
  parent.children?.forEach((child) => {
    next(child, path ? `${path}.${parent.property}` : parent.property, messages);
  });
  if (parent.constraints) {
    Object.values(parent.constraints).forEach((constraint) => {
      messages.push(path ? `${path}.${constraint}` : constraint);
    });
  }
}

export function collectValidationErrors(errors: ValidationError[]): string[] {
  const messages: string[] = [];
  errors.forEach((error) => next(error, null, messages));
  return messages;
}
