import { FilterEntityModel } from './filter-entity.model';

export interface FilterEntityStateModel {
  items: { [id: string]: FilterEntityModel };
  byGroup: { [groupReference: string]: string[] };
}
