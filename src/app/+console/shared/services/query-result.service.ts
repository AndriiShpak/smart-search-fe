import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, of } from 'rxjs';
import { filter, catchError, switchMap } from 'rxjs/operators';

import { GenericHttpService } from '@app/services';
import { IntentModel, QueryResultModel } from '@console-shared/models';
import { DataLanguageService } from './data-language.service';

const QUERY_URL = '/query/identify';

@Injectable({
  providedIn: 'root',
})
export class QueryResultService {
  public queryResult$: Observable<QueryResultModel>;

  private queryResultSubj$: BehaviorSubject<QueryResultModel | null> = new BehaviorSubject(
    null
  );
  private query$: Subject<string> = new Subject();

  constructor(
    private genericHttp: GenericHttpService,
    private dataLanguageService: DataLanguageService
  ) {
    this.queryResult$ = this.queryResultSubj$.asObservable();

    this.handleLoad();
  }

  public identifyQuery(query: string): void {
    this.query$.next(query);
  }

  private handleLoad(): void {
    this.query$
      .pipe(
        switchMap((query) =>
          this.genericHttp
            .get<IntentModel[]>(QUERY_URL, {
              query,
              language: this.dataLanguageService.language,
            })
            .pipe(catchError(() => of(null)))
        ),
        filter<QueryResultModel>(Boolean)
      )
      .subscribe((queryResult) => {
        this.queryResultSubj$.next(queryResult);
      });
  }
}
