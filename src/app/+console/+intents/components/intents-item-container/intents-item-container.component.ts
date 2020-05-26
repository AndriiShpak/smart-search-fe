import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HeaderService, IntentsService } from '@console-shared/services';
import { IntentModel } from '@console-shared/models';
import { FILTER_SECTION } from '@console-shared/constants';
import { selectIntentsList } from '@console-shared/utils';

@Component({
  selector: 'app-intents-item-container',
  templateUrl: './intents-item-container.component.html',
  styleUrls: ['./intents-item-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntentsItemContainerComponent implements OnInit {
  public intents$: Observable<IntentModel[]>;

  constructor(
    private headerService: HeaderService,
    private intentsService: IntentsService
  ) {}

  public ngOnInit(): void {
    this.registerHeader();
    this.intentsService.triggerLoad();
    this.intents$ = this.intentsService.intents$.pipe(map(selectIntentsList));
  }

  private registerHeader(): void {
    this.headerService.headerTitle$.next(FILTER_SECTION.text);
    this.headerService.headerIcon$.next(FILTER_SECTION.icon);
  }
}
