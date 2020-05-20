import {
  Component,
  ChangeDetectionStrategy,
  OnChanges,
  Input,
} from '@angular/core';

import { FilterEntityByGroupModel, FilterEntityModel } from '../../../models';
import { SYSTEM_ENTITY_GROUP } from '../../filters.constants';

@Component({
  selector: 'app-filters-entities-list',
  templateUrl: './filters-entities-list.component.html',
  styleUrls: ['./filters-entities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersEntitiesListComponent implements OnChanges {
  @Input()
  public filterEntities: FilterEntityByGroupModel;

  public groups: string[];
  public systemEntities: FilterEntityModel[];

  public ngOnChanges(): void {
    this.groups = this.filterEntities
      ? Object.keys(this.filterEntities).filter(
          (entity) => entity !== SYSTEM_ENTITY_GROUP
        )
      : [];

    this.systemEntities =
      (this.filterEntities && this.filterEntities[SYSTEM_ENTITY_GROUP]) || [];
  }
}
