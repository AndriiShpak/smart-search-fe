import { TrainingPhrasePartModel } from './training-phrase-part.model';

export interface TrainingPhraseModel {
  dialogflowId?: string;
  parts: TrainingPhrasePartModel[];
}
