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
import { MatChipInputEvent } from '@angular/material/chips';

import { FilterEntityModel, NameMapModel } from '@console-shared/models';
import { NameDataLanguagePipe } from '@console-shared/pipes';

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

  constructor(private nameDataLanguagePipe: NameDataLanguagePipe) {}

  public ngOnChanges(): void {
    this.mutableFilterItem = Rclone(this.filterItem);
  }

  public addSynonym(index: number, event: MatChipInputEvent): void {
    this.nameDataLanguagePipe
      .transform(this.mutableFilterItem.entities[index].synonyms)
      .push(event.value);

    console.log(this.mutableFilterItem);
    event.input.value = '';
  }

  public removeSynonym(index: number, synonym: string): void {
    const synonymsPerLanguage = this.nameDataLanguagePipe.transform(
      this.mutableFilterItem.entities[index].synonyms
    );

    const indexOfRemoveItem = synonymsPerLanguage.indexOf(synonym);

    if (indexOfRemoveItem >= 0) {
      synonymsPerLanguage.splice(index, 1);
    }
  }

  public onSave(): void {
    this.saved.emit(this.mutableFilterItem);
  }
}
