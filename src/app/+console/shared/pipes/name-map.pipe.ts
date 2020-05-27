import { Pipe, PipeTransform } from '@angular/core';

import { NameMapModel } from '@console-shared/models';

@Pipe({ name: 'nameMap' })
export class NameMapPipe<T> implements PipeTransform {
  transform(value: NameMapModel<T>): T {
    return value.en;
  }
}
