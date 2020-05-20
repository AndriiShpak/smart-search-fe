import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
} from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { FilterEntityModel } from '../../../models';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-filters-item',
  templateUrl: './filters-item.component.html',
  styleUrls: ['./filters-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersItemComponent implements OnChanges {
  @Input()
  filterItem: FilterEntityModel;

  separatorKeysCodes = [COMMA, ENTER];

  public ngOnChanges(): void {}

  // TODO: add remove functionality
  // TODO: push changed event to top instead of mutation
  public addSynonym(index: number, event: MatChipInputEvent): void {
    this.filterItem.entities[index].synonyms.push(event.value);
    event.input.value = '';
  }
}
