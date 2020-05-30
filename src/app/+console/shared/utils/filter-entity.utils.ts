import RindexBy from 'ramda/es/indexBy';
import Rprop from 'ramda/es/prop';
import RgroupBy from 'ramda/es/groupBy';
import Rpipe from 'ramda/es/pipe';
import Rmap from 'ramda/es/map';

import {
  FilterEntityModel,
  FilterEntityStateModel,
  FilterEntityByGroupModel,
} from '@console-shared/models';

export const mapFilterEntitiesToState = (
  entities: FilterEntityModel[]
): FilterEntityStateModel => ({
  items: RindexBy(Rprop('id'), entities),
  byGroup: Rpipe(
    RgroupBy(Rprop('groupReference')),
    Rmap(Rmap(Rprop('id')))
  )(entities),
});

export const selectEntitiesByGroupReference = (
  entitiesState: FilterEntityStateModel | null
): FilterEntityByGroupModel =>
  entitiesState
    ? Rmap(
        Rmap((id) => entitiesState.items[id]),
        entitiesState.byGroup
      )
    : {};

export const selectEntityByIdFactory = (id: string) => (
  entitiesState: FilterEntityStateModel | null
): FilterEntityModel | null => (entitiesState ? entitiesState.items[id] : null);

export const selectEntitiesByGroupFactory = (group: string) => (
  entitiesState: FilterEntityStateModel | null
): FilterEntityModel[] =>
  entitiesState
    ? (entitiesState.byGroup[group] || []).map((id) =>
        selectEntityByIdFactory(id)(entitiesState)
      )
    : [];

export const filterEntitiesReadyForSearch = (entities: FilterEntityModel[]) =>
  entities.filter((entity) => entity.isReadyForSearch);
