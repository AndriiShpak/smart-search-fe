import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, of } from 'rxjs';
import { exhaustMap, filter, map, catchError } from 'rxjs/operators';
import Rmap from 'ramda/es/map';

import { GenericHttpService } from '@app/services';
import { IntentsStateModel, IntentModel } from '@console-shared/models';
import { mapIntentsToState } from '@console-shared/utils';

const INTENTS_URL = '/intents/datadriven';

@Injectable({
  providedIn: 'root',
})
export class IntentsService {
  public intents$: Observable<IntentsStateModel>;

  private intentsSubj$: BehaviorSubject<IntentsStateModel | null> = new BehaviorSubject(
    null
  );
  private loadSubj$: Subject<boolean> = new Subject();

  constructor(private genericHttp: GenericHttpService) {
    this.intents$ = this.intentsSubj$
      .asObservable()
      .pipe(filter<IntentsStateModel>(Boolean));

    this.handleLoad();
  }

  public triggerLoad(force: boolean = false): void {
    this.loadSubj$.next(force);
  }

  public saveEntity(intent: IntentModel): Observable<IntentModel> {
    return this.genericHttp.put(INTENTS_URL, intent);
  }

  private handleLoad(): void {
    this.loadSubj$
      .pipe(
        filter((isForce) => !this.intentsSubj$.value || isForce),
        exhaustMap(() =>
          this.genericHttp
            .get<IntentModel[]>(INTENTS_URL)
            .pipe(catchError(() => of(null)))
        ),
        filter(Boolean),
        // API return id with underscore
        map(Rmap((intent) => ({ ...intent, id: intent._id }))),
        map(mapIntentsToState)
      )
      .subscribe((intents) => {
        this.intentsSubj$.next(intents);
      });
  }
}
