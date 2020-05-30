import { FilterEntityModel } from './entity/filter-entity.model';
import { IntentModel } from './intent/intents.model';

export interface QueryDisplayModel {
  queryText: string;
  parameters: Array<{
    entity: FilterEntityModel;
    values: string[];
  }>;
  allRequiredParamsPresent: boolean;
  intent: IntentModel | null;
}
