import { ClassTransformOptions } from 'class-transformer';

export interface TypedResponseModuleOptions {
  error?: (error: Error) => void;
  transformErrorOptions?: ClassTransformOptions;
}
