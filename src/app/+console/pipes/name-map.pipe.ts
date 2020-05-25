import { Pipe, PipeTransform } from '@angular/core';

import { NameMapModel } from '../models';

@Pipe({ name: 'nameMap' })
export class NameMapPipe implements PipeTransform {
  transform(value: NameMapModel): string {
    return value.en;
  }
}
