import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { FilterEntityByGroupModel, IntentModel } from '@console-shared/models';

@Component({
  selector: 'app-filters-entities-list',
  templateUrl: './filters-entities-list.component.html',
  styleUrls: ['./filters-entities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersEntitiesListComponent {
  @Input()
  public filterEntities: FilterEntityByGroupModel;
  @Input()
  public intentsWithEntities: IntentModel[];
}
