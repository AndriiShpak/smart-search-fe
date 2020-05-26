import { FilterEntityModel } from './filter-entity.model';

export type FilterEntityByGroupModel = {
  [groupReference: string]: FilterEntityModel[];
};
