import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { FilterEntitiesService, HeaderService } from '@console-shared/services';
import { FilterEntityModel } from '@console-shared/models';
import { selectEntityByIdFactory } from '@console-shared/utils';
import { NameLanguagePipe } from '@console-shared/pipes';

@Component({
  selector: 'app-filters-item-container',
  templateUrl: './filters-item-container.component.html',
  styleUrls: ['./filters-item-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersItemContainerComponent implements OnInit, OnDestroy {
  public filterItem$: Observable<FilterEntityModel>;

  private destroy$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private filterEntitiesService: FilterEntitiesService,
    private headerService: HeaderService,
    private nameLanguagePipe: NameLanguagePipe
  ) {}

  public ngOnInit(): void {
    const id: string = this.activatedRoute.snapshot.params.id;

    this.filterItem$ = id
      ? this.filterEntitiesService.entities$.pipe(
          map(selectEntityByIdFactory(id))
        )
      : of(null);

    this.filterItem$
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.registerHeader.bind(this));
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onSave(item: FilterEntityModel): void {
    this.filterEntitiesService.saveEntity(item).subscribe(() => {
      this.filterEntitiesService.triggerLoad(true);
    });
  }

  private registerHeader(item: FilterEntityModel | null): void {
    if (item) {
      this.headerService.headerTitle$.next(
        this.nameLanguagePipe.transform(item.name)
      );
      this.headerService.headerIcon$.next('alternate_email');
    }
  }
}
