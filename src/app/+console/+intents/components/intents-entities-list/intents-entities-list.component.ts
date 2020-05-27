import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  EventEmitter,
  Output,
} from '@angular/core';

import { FilterEntityModel } from '@console-shared/models';
import { stringToColour } from '@console-shared/utils';

@Component({
  selector: 'app-intents-entities-list',
  templateUrl: './intents-entities-list.component.html',
  styleUrls: ['./intents-entities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntentsEntitiesListComponent implements OnChanges {
  @Input()
  filterEntities: FilterEntityModel[];
  @Input()
  isSelectMode: boolean;

  @Output()
  entitySelected: EventEmitter<FilterEntityModel> = new EventEmitter();

  filterColors: string[];

  public ngOnChanges(): void {
    if (this.filterEntities) {
      this.filterColors = this.filterEntities.map((entity) =>
        stringToColour(entity.name.system)
      );
    }
  }

  public onEntityClick(entity: FilterEntityModel): void {
    this.entitySelected.emit(entity);
  }
}
