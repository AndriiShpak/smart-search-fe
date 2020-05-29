import { IntentModel, FilterEntityByGroupModel } from '@console-shared/models';

export const filterIntentsWithEntities = (
  intents: IntentModel[],
  entitiesByGroup: FilterEntityByGroupModel
) => intents.filter((intent) => entitiesByGroup[intent.name.system]);
