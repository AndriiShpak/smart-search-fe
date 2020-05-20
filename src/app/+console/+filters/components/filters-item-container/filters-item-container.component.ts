import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { FilterEntitiesService, HeaderService } from '../../../services';
import { FilterEntityModel } from '../../../models';
import { selectItemByIdFactory } from '../../../utils';

@Component({
  selector: 'app-filters-item-container',
  templateUrl: './filters-item-container.component.html',
  styleUrls: ['./filters-item-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersItemContainerComponent implements OnInit {
  public filterItem$: Observable<FilterEntityModel>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private filterEntitiesService: FilterEntitiesService,
    private headerService: HeaderService
  ) {}

  public ngOnInit(): void {
    const id: string = this.activatedRoute.snapshot.params.id;
    this.filterEntitiesService.triggerLoad();

    this.filterItem$ = id
      ? this.filterEntitiesService.entities$
          .pipe(map(selectItemByIdFactory(id)))
          .pipe(tap(this.registerHeader.bind(this)))
      : of(null);
  }

  private registerHeader(item: FilterEntityModel | null): void {
    if (item) {
      // TODO: investigate why header is not applied in sync way
      setTimeout(() => {
        this.headerService.headerTitle$.next(item.displayName);
        this.headerService.headerIcon$.next('alternate_email');
      });
    }
  }
}
