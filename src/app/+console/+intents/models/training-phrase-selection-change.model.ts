import { TrainingPhrasePartModel } from '@console-shared/models';

export interface TrainingPhraseSelectionChangeModel {
  parts: TrainingPhrasePartModel[];
  markIndex: number;
  trainingPhraseIndex?: number;
}
