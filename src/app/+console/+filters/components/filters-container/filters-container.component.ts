import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HeaderService, FilterEntitiesService } from '@console-shared/services';
import { FILTER_SECTION } from '@console-shared/constants';
import { FilterEntityByGroupModel } from '@console-shared/models';
import { selectEntitiesByGroupReference } from '@console-shared/utils';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-filters-container',
  templateUrl: './filters-container.component.html',
  styleUrls: ['./filters-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersContainerComponent implements OnInit {
  public filterEntities$: Observable<FilterEntityByGroupModel>;

  constructor(
    private headerService: HeaderService,
    private filterEntitiesService: FilterEntitiesService
  ) {}

  public ngOnInit(): void {
    this.registerHeader();
    this.filterEntitiesService.triggerLoad();
    this.filterEntities$ = this.filterEntitiesService.entities$.pipe(
      map(selectEntitiesByGroupReference)
    );
  }

  private registerHeader(): void {
    this.headerService.headerTitle$.next(FILTER_SECTION.text);
    this.headerService.headerIcon$.next(FILTER_SECTION.icon);
  }
}
