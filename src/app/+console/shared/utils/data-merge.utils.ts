import {
  IntentModel,
  FilterEntityByGroupModel,
  FilterEntityStateModel,
  IntentsStateModel,
  QueryResultModel,
  QueryDisplayModel,
} from '@console-shared/models';

export const filterIntentsWithEntities = (
  intents: IntentModel[],
  entitiesByGroup: FilterEntityByGroupModel
) => intents.filter((intent) => entitiesByGroup[intent.name.system]);

export const mergeQueryResultWithEntitiesAndIntents = (
  queryResult: QueryResultModel,
  intentsState: IntentsStateModel,
  entitiesState: FilterEntityStateModel
): QueryDisplayModel => {
  const entitiesList = Object.values(entitiesState.items);

  return {
    queryText: queryResult.queryText,
    allRequiredParamsPresent: queryResult.allRequiredParamsPresent,
    intent: Object.values(intentsState.items).find(
      (intent) => intent.dialogflowId === queryResult.intentDialogflowId
    ),
    parameters: Object.keys(queryResult.parameters).map((parameterName) => ({
      entity: entitiesList.find(
        (entity) => entity.name.system === parameterName
      ),
      values: queryResult.parameters[parameterName],
    })),
  };
};
