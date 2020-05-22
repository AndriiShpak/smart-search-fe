import {
  Component,
  ChangeDetectionStrategy,
  OnChanges,
  Input,
} from '@angular/core';

import { FilterEntityByGroupModel } from '../../../models';

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
    this.groups = Object.keys(this.filterEntities);
  }
}
