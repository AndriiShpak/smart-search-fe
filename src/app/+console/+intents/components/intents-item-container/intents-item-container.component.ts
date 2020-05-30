import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, take, filter, takeUntil } from 'rxjs/operators';

import {
  HeaderService,
  IntentsService,
  FilterEntitiesService,
} from '@console-shared/services';
import { IntentModel, FilterEntityModel } from '@console-shared/models';
import {
  selectIntentByIdFactory,
  selectEntitiesByGroupFactory,
  filterEntitiesReadyForSearch,
} from '@console-shared/utils';
import { NameLanguagePipe } from '@console-shared/pipes';

@Component({
  selector: 'app-intents-item-container',
  templateUrl: './intents-item-container.component.html',
  styleUrls: ['./intents-item-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntentsItemContainerComponent implements OnInit, OnDestroy {
  public intent: IntentModel;
  public filterEntities$: Observable<FilterEntityModel[]>;

  private destroy$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private headerService: HeaderService,
    private intentsService: IntentsService,
    private filterEntityService: FilterEntitiesService,
    private cd: ChangeDetectorRef,
    private nameLanguagePipe: NameLanguagePipe
  ) {}

  public ngOnInit(): void {
    const id: string = this.activatedRoute.snapshot.params.id;

    if (id) {
      this.setupIntent(id);
    }
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onSave(intent: IntentModel): void {
    this.intentsService.saveEntity(intent).subscribe(() => {
      this.intentsService.triggerLoad(true);
    });
  }

  private setupIntent(id: string): void {
    this.intentsService.intents$
      .pipe(
        map(selectIntentByIdFactory(id)),
        filter<IntentModel>(Boolean),
        take(1),
        takeUntil(this.destroy$)
      )
      .subscribe((intent) => {
        this.intent = intent;
        this.registerHeader(intent);
        this.filterEntities$ = this.filterEntityService.entities$.pipe(
          map(selectEntitiesByGroupFactory(intent.name.system)),
          map(filterEntitiesReadyForSearch)
        );
        this.cd.markForCheck();
      });
  }

  private registerHeader(item: IntentModel | null): void {
    if (item) {
      this.headerService.headerTitle$.next(
        this.nameLanguagePipe.transform(item.name)
      );
      this.headerService.headerIcon$.next('format_quote');
    }
  }
}
