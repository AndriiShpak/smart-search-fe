import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HeaderService, FilterEntitiesService } from '../../../services';
import { FILTER_SECTION } from '../../../console.constants';
import { FilterEntityByGroupModel } from '../../../models';
import { selectItemsByGroupReference } from 'src/app/+console/utils';
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
      map(selectItemsByGroupReference)
    );
  }

  private registerHeader(): void {
    this.headerService.headerTitle$.next(FILTER_SECTION.text);
    this.headerService.headerIcon$.next(FILTER_SECTION.icon);
  }
}
