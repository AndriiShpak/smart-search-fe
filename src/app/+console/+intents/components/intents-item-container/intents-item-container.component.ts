import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, filter } from 'rxjs/operators';

import {
  HeaderService,
  IntentsService,
  FilterEntitiesService,
} from '@console-shared/services';
import { IntentModel, FilterEntityModel } from '@console-shared/models';
import {
  selectIntentByIdFactory,
  selectEntitiesByGroupFactory,
} from '@console-shared/utils';

@Component({
  selector: 'app-intents-item-container',
  templateUrl: './intents-item-container.component.html',
  styleUrls: ['./intents-item-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntentsItemContainerComponent implements OnInit {
  public intent: IntentModel;
  public filterEntities$: Observable<FilterEntityModel[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private headerService: HeaderService,
    private intentsService: IntentsService,
    private filterEntityService: FilterEntitiesService,
    private cd: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    const id: string = this.activatedRoute.snapshot.params.id;
    this.intentsService.triggerLoad();
    this.filterEntityService.triggerLoad();

    if (id) {
      this.setupIntent(id);
    }
  }

  public onSave(intent: IntentModel): void {
    this.intentsService.saveEntity(intent).subscribe(() => {
      this.intentsService.triggerLoad(true);
    });
  }

  // TODO: add on destroy
  private setupIntent(id: string): void {
    this.intentsService.intents$
      .pipe(
        map(selectIntentByIdFactory(id)),
        filter<IntentModel>(Boolean),
        take(1)
      )
      .subscribe((intent) => {
        this.intent = intent;
        this.registerHeader(intent);
        this.filterEntities$ = this.filterEntityService.entities$.pipe(
          map(selectEntitiesByGroupFactory(intent.name.system))
        );
        this.cd.markForCheck();
      });
  }

  private registerHeader(item: IntentModel | null): void {
    if (item) {
      // TODO: investigate why header is not applied in sync way
      setTimeout(() => {
        // TODO: add pipe
        this.headerService.headerTitle$.next(item.name.en);
        this.headerService.headerIcon$.next('format_quote');
      });
    }
  }
}
