import { NameMapModel } from '@console-shared/models/name-map.model';
import { TrainingPhraseModel } from './training-phrase.model';

export interface IntentModel {
  id: string;
  clientId: number;
  dialogflowId: string;
  name: NameMapModel;
  trainingPhrases: NameMapModel<TrainingPhraseModel[]>;
}
