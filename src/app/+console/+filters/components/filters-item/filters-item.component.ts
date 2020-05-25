import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import Rclone from 'ramda/es/clone';

import { FilterEntityModel, NameMapModel } from '../../../models';
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

  @Output()
  saved: EventEmitter<FilterEntityModel> = new EventEmitter();

  mutableFilterItem: FilterEntityModel;
  separatorKeysCodes = [COMMA, ENTER];

  public ngOnChanges(): void {
    this.mutableFilterItem = Rclone(this.filterItem);
  }

  // TODO: add remove functionality
  public addSynonym(index: number, event: MatChipInputEvent): void {
    // TODO: add pushing by language
    this.mutableFilterItem.entities[index].synonyms.push({
      en: event.value,
    });
    event.input.value = '';
  }

  public removeSynonym(index: number, synonym: NameMapModel): void {
    const synonyms = this.mutableFilterItem.entities[index].synonyms;

    const indexOfRemoveItem = synonyms.indexOf(synonym);

    if (indexOfRemoveItem >= 0) {
      synonyms.splice(index, 1);
    }
  }

  public onSave(): void {
    this.saved.emit(this.mutableFilterItem);
  }
}
