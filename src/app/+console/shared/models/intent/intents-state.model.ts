import { IntentModel } from './intents.model';

export interface IntentsStateModel {
  items: { [id: string]: IntentModel };
}
