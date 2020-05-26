import { Pipe, PipeTransform } from '@angular/core';

import { NameMapModel } from '@console-shared/models';

@Pipe({ name: 'nameMap' })
export class NameMapPipe implements PipeTransform {
  transform(value: NameMapModel): string {
    return value.en;
  }
}
