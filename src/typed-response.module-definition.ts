import { ConfigurableModuleBuilder } from '@nestjs/common';
import { TypedResponseModuleOptions } from './typed-response.module-options';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE, ASYNC_OPTIONS_TYPE } =
  new ConfigurableModuleBuilder<TypedResponseModuleOptions>().build();
