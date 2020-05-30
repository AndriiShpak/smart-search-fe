import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
  HeaderService,
  FilterEntitiesService,
  IntentsService,
} from '@console-shared/services';
import { observeOn } from 'rxjs/operators';
import { asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentContainerComponent {
  public headerText$ = this.headerService.headerTitle$.pipe(
    observeOn(asyncScheduler)
  );
  public headerIcon$ = this.headerService.headerIcon$.pipe(
    observeOn(asyncScheduler)
  );

  constructor(
    private headerService: HeaderService,
    private filterEntitiesService: FilterEntitiesService,
    private intentsService: IntentsService
  ) {
    this.initData();
  }

  private initData(): void {
    this.filterEntitiesService.triggerLoad();
    this.intentsService.triggerLoad();
  }
}
