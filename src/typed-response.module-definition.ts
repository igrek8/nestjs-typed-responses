import { ConfigurableModuleBuilder, Provider } from '@nestjs/common';
import { ClassTransformOptions } from 'class-transformer';
import { EXTRA_MODULE_OPTIONS_TOKEN } from './constants';
import { TypedResponseModuleOptions } from './typed-response.module-options';

const transformErrorOptions: ClassTransformOptions = {
  strategy: 'excludeAll',
};

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE, ASYNC_OPTIONS_TYPE } =
  new ConfigurableModuleBuilder<TypedResponseModuleOptions>()
    .setExtras({ transformErrorOptions }, (definition, extras) => {
      const providers: Provider[] = [];
      if (definition.providers) {
        providers.push(...definition.providers);
      }
      return {
        ...definition,
        providers: [
          {
            provide: EXTRA_MODULE_OPTIONS_TOKEN,
            useValue: extras,
          },
          ...providers,
        ],
      };
    })
    .build();
