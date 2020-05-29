import { NameMapModel } from '@console-shared/models/name-map.model';

export interface FilterEntityModel {
  id: string;
  clientId: string;
  groupReference: string;
  name: NameMapModel;
  entities: Array<{
    name: NameMapModel;
    synonyms: NameMapModel<string[]>;
  }>;
  isReadyForSearch: boolean;
  isRequired: boolean;
  isOnlySynonyms: boolean;
  createdAt: string;
  updatedAt: string;
}
