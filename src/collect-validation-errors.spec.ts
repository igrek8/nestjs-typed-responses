import { plainToInstance, Type } from 'class-transformer';
import { ArrayMinSize, IsDefined, IsString, ValidateNested, validateSync } from 'class-validator';
import 'reflect-metadata';

import { collectValidationErrors } from './collect-validation-errors';

describe('collectValidationErrors', () => {
  it('returns a list of error messages', () => {
    class Entity {
      @IsString()
      data!: string;

      constructor(props: Partial<Entity>) {
        Object.assign(this, props);
      }
    }

    class ListItem {
      @Type(() => Entity)
      @ValidateNested()
      item!: Entity;

      constructor(props: Partial<ListItem>) {
        Object.assign(this, props);
      }
    }

    class List {
      @Type(() => Entity)
      @IsDefined()
      @ValidateNested()
      entity!: Entity;

      @Type(() => ListItem)
      @ValidateNested({ each: true })
      @ArrayMinSize(2)
      items!: ListItem[];

      constructor(props: Partial<List>) {
        Object.assign(this, props);
      }
    }

    const payload = plainToInstance(List, {
      items: [
        {
          item: {
            data: {
              test: 'Hello!',
            },
          },
        },
      ],
      entity: {
        data: {
          test: 'Hello!',
        },
      },
    });

    expect(collectValidationErrors(validateSync(payload))).toEqual([
      'entity.data must be a string',
      'items.0.item.data must be a string',
      'items must contain at least 2 elements',
    ]);
  });
});
