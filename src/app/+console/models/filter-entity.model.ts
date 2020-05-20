export interface FilterEntityModel {
  id: string;
  displayName: string;
  groupReference: string;
  entities: Array<{
    value: string;
    synonyms: string[];
  }>;
}
