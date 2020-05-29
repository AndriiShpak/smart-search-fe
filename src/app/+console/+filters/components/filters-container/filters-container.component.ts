import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {
  HeaderService,
  FilterEntitiesService,
  IntentsService,
} from '@console-shared/services';
import { FILTER_SECTION } from '@console-shared/constants';
import { FilterEntityByGroupModel, IntentModel } from '@console-shared/models';
import {
  selectEntitiesByGroupReference,
  selectIntentsList,
  filterIntentsWithEntities,
} from '@console-shared/utils';
import { combineLatest } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-filters-container',
  templateUrl: './filters-container.component.html',
  styleUrls: ['./filters-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersContainerComponent implements OnInit {
  public filterEntities$: Observable<FilterEntityByGroupModel>;
  public intentsWithEntities$: Observable<IntentModel[]>;

  constructor(
    private headerService: HeaderService,
    private filterEntitiesService: FilterEntitiesService,
    private intentsService: IntentsService
  ) {}

  public ngOnInit(): void {
    this.registerHeader();
    this.filterEntitiesService.triggerLoad();
    this.intentsService.triggerLoad();
    this.intentsWithEntities$ = combineLatest([
      this.intentsService.intents$.pipe(
        filter((intents) => !!intents),
        map(selectIntentsList)
      ),
      this.filterEntitiesService.entities$.pipe(
        filter((entities) => !!entities),
        map(selectEntitiesByGroupReference)
      ),
    ]).pipe(
      map(([intents, entities]) => filterIntentsWithEntities(intents, entities))
    );

    this.filterEntities$ = this.filterEntitiesService.entities$.pipe(
      map(selectEntitiesByGroupReference)
    );
  }

  private registerHeader(): void {
    this.headerService.headerTitle$.next(FILTER_SECTION.text);
    this.headerService.headerIcon$.next(FILTER_SECTION.icon);
  }
}
