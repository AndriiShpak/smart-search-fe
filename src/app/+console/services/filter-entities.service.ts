import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { exhaustMap, filter, map } from 'rxjs/operators';

import { GenericHttpService } from 'src/app/services';
import { FilterEntityModel, FilterEntityStateModel } from '../models';
import { mapFilterEntitiesToState } from '../utils';

@Injectable({
  providedIn: 'root',
})
// TODO: add isLoading
export class FilterEntitiesService {
  public entities$: Observable<FilterEntityStateModel>;

  private entitiesSubj$: BehaviorSubject<FilterEntityStateModel | null> = new BehaviorSubject(
    null
  );
  private loadSubj$: Subject<void> = new Subject();

  constructor(private genericHttp: GenericHttpService) {
    this.entities$ = this.entitiesSubj$
      .asObservable()
      .pipe(filter<FilterEntityStateModel>(Boolean));

    this.handleLoad();
  }

  public triggerLoad(): void {
    this.loadSubj$.next();
  }

  private handleLoad(): void {
    this.loadSubj$
      .pipe(
        filter(() => !this.entitiesSubj$.value),
        exhaustMap(() =>
          // TODO: add catch error
          this.genericHttp.get<FilterEntityModel[]>('/entities')
        ),
        map(mapFilterEntitiesToState)
      )
      .subscribe((entities) => {
        this.entitiesSubj$.next(entities);
      });
  }
}
