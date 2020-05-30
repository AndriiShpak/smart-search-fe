import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HeaderService, IntentsService } from '@console-shared/services';
import { IntentModel } from '@console-shared/models';
import { INTENTS_SECTION } from '@console-shared/constants';
import { selectIntentsList } from '@console-shared/utils';

@Component({
  selector: 'app-intents-container',
  templateUrl: './intents-container.component.html',
  styleUrls: ['./intents-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntentsContainerComponent implements OnInit {
  public intents$: Observable<IntentModel[]>;

  constructor(
    private headerService: HeaderService,
    private intentsService: IntentsService
  ) {}

  public ngOnInit(): void {
    this.registerHeader();
    this.intents$ = this.intentsService.intents$.pipe(map(selectIntentsList));
  }

  private registerHeader(): void {
    this.headerService.headerTitle$.next(INTENTS_SECTION.text);
    this.headerService.headerIcon$.next(INTENTS_SECTION.icon);
  }
}
