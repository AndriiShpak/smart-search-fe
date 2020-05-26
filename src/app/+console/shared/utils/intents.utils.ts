import RindexBy from 'ramda/es/indexBy';
import Rprop from 'ramda/es/prop';

import { IntentModel, IntentsStateModel } from '@console-shared/models';

export const mapIntentsToState = (
  intents: IntentModel[]
): IntentsStateModel => ({
  items: RindexBy(Rprop('id'), intents),
});

export const selectIntentByIdFactory = (id: string) => (
  intentsState: IntentsStateModel | null
): IntentModel | null => (intentsState ? intentsState.items[id] : null);

export const selectIntentsList = (
  intentsState: IntentsStateModel | null
): IntentModel[] | null =>
  intentsState ? Object.values(intentsState.items) : null;
