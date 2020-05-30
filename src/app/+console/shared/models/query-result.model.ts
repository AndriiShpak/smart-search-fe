export interface QueryResultModel {
  queryText: string;
  parameters: {
    [parameter: string]: string[];
  };
  allRequiredParamsPresent: boolean;
  intentDialogflowId: string;
}
