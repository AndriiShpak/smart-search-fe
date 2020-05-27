import {
  Component,
  ChangeDetectionStrategy,
  OnChanges,
  Input,
} from '@angular/core';

import { FilterEntityByGroupModel } from '@console-shared/models';

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

  public ngOnChanges(): void {
    this.groups = this.filterEntities ? Object.keys(this.filterEntities) : [];
  }
}
