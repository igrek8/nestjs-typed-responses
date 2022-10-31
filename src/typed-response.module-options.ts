import { ClassTransformOptions } from 'class-transformer';
import { HttpException } from './exceptions';

export interface TypedResponseModuleOptions {
  transformError?(error: unknown): HttpException;
  transformErrorOptions?: ClassTransformOptions;
}
