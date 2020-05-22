import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { exhaustMap, filter, map, take } from 'rxjs/operators';
import Rmap from 'ramda/es/map';

import { GenericHttpService } from 'src/app/services';
import { FilterEntityModel, FilterEntityStateModel } from '../models';
import { mapFilterEntitiesToState } from '../utils';

const ENTITIES_URL = '/filters/entities';

@Injectable({
  providedIn: 'root',
})
// TODO: add isLoading
export class FilterEntitiesService {
  public entities$: Observable<FilterEntityStateModel>;

  private entitiesSubj$: BehaviorSubject<FilterEntityStateModel | null> = new BehaviorSubject(
    null
  );
  private loadSubj$: Subject<boolean> = new Subject();

  constructor(private genericHttp: GenericHttpService) {
    this.entities$ = this.entitiesSubj$
      .asObservable()
      .pipe(filter<FilterEntityStateModel>(Boolean));

    this.handleLoad();
  }

  public triggerLoad(force: boolean = false): void {
    this.loadSubj$.next(force);
  }

  public saveEntity(entity: FilterEntityModel): Observable<FilterEntityModel> {
    return this.genericHttp.put(ENTITIES_URL, entity);
  }

  private handleLoad(): void {
    this.loadSubj$
      .pipe(
        filter((isForce) => !this.entitiesSubj$.value || isForce),
        exhaustMap(() =>
          // TODO: add catch error
          this.genericHttp.get<FilterEntityModel[]>(ENTITIES_URL)
        ),
        // TODO: temporary until API return id with underscore
        map(Rmap((entity) => ({ ...entity, id: entity._id }))),
        map(mapFilterEntitiesToState)
      )
      .subscribe((entities) => {
        this.entitiesSubj$.next(entities);
      });
  }
}
