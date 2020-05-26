import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { exhaustMap, filter, map } from 'rxjs/operators';
import Rmap from 'ramda/es/map';

import { GenericHttpService } from '@app/services';
import { IntentsStateModel, IntentModel } from '@console-shared/models';
import { mapIntentsToState } from '@console-shared/utils';

const INTENTS_URL = '/intents/datadriven';

@Injectable({
  providedIn: 'root',
})
// TODO: add isLoading
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
          // TODO: add catch error
          this.genericHttp.get<IntentModel[]>(INTENTS_URL)
        ),
        // TODO: temporary until API return id with underscore
        map(Rmap((intent) => ({ ...intent, id: intent._id }))),
        map(mapIntentsToState)
      )
      .subscribe((intents) => {
        this.intentsSubj$.next(intents);
      });
  }
}
