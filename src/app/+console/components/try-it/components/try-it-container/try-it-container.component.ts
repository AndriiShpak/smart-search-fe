import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { withLatestFrom, filter, map } from 'rxjs/operators';

import {
  QueryResultService,
  IntentsService,
  FilterEntitiesService,
} from '@console-shared/services';
import { QueryDisplayModel } from '@console-shared/models';
import { mergeQueryResultWithEntitiesAndIntents } from '@console-shared/utils';

@Component({
  selector: 'app-try-it-container',
  templateUrl: './try-it-container.component.html',
  styleUrls: ['./try-it-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TryItContainerComponent implements OnInit {
  public queryResult$: Observable<QueryDisplayModel>;

  constructor(
    private queryService: QueryResultService,
    private intentsService: IntentsService,
    private filterEntitiesService: FilterEntitiesService
  ) {}

  public ngOnInit(): void {
    this.queryResult$ = this.queryService.queryResult$.pipe(
      withLatestFrom(
        this.intentsService.intents$.pipe(filter((intents) => !!intents)),
        this.filterEntitiesService.entities$.pipe(
          filter((entities) => !!entities)
        )
      ),
      map(([queryResult, intents, entities]) =>
        mergeQueryResultWithEntitiesAndIntents(queryResult, intents, entities)
      )
    );
  }

  public onSearch(query: string): void {
    this.queryService.identifyQuery(query);
  }
}
