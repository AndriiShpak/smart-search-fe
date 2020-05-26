import { NameMapModel } from '../name-map.model';

export interface FilterEntityModel {
  id: string;
  clientId: string;
  groupReference: string;
  name: NameMapModel;
  entities: Array<{
    name: NameMapModel;
    synonyms: NameMapModel[];
  }>;
  isReadyForSearch: boolean;
  isRequired: boolean;
  isOnlySynonyms: boolean;
  createdAt: string;
  updatedAt: string;
}
