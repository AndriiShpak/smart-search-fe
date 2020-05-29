import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  ChangeDetectorRef,
} from '@angular/core';
import Rclone from 'ramda/es/clone';

import { TrainingPhraseSelectionChangeModel } from '@console-intents/models';
import { DocumentEventListenerService } from '@app/services';

import {
  IntentModel,
  FilterEntityModel,
  TrainingPhrasePartModel,
  TrainingPhraseModel,
} from '@console-shared/models';
import { NameDataLanguagePipe } from '@console-shared/pipes';

@Component({
  selector: 'app-intents-item',
  templateUrl: './intents-item.component.html',
  styleUrls: ['./intents-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntentsItemComponent implements OnChanges {
  @Input()
  intent: IntentModel;
  @Input()
  filterEntities: FilterEntityModel[];

  @Output()
  saved: EventEmitter<IntentModel> = new EventEmitter();

  mutableIntent: IntentModel;

  currentSelection: TrainingPhraseSelectionChangeModel | null;

  constructor(
    private documentEventListenerService: DocumentEventListenerService,
    private cd: ChangeDetectorRef,
    private nameDataLanguagePipe: NameDataLanguagePipe
  ) {}

  public ngOnChanges(): void {
    this.mutableIntent = Rclone(this.intent);
  }

  public onSave(): void {
    this.saved.emit(this.mutableIntent);
  }

  public onInputChange(index: number, parts: TrainingPhrasePartModel[]): void {
    this.getPhrasesByLanguage()[index].parts = parts;
  }

  public onNewAdded(parts: TrainingPhrasePartModel[]): void {
    if (parts.length && parts[0].text.trim()) {
      this.getPhrasesByLanguage().push({
        parts,
      });
    }
  }

  public onSelection(
    index: number,
    selectionChange: TrainingPhraseSelectionChangeModel
  ): void {
    const selection = {
      ...selectionChange,
      trainingPhraseIndex: index,
    };
    this.currentSelection = selection;

    const listener = this.documentEventListenerService.addMouseupListener(
      () => !!this.currentSelection,
      () => {
        // After selection is made next click should be on entity filter to assign type, so here we waiting for that
        // setTimeout is added to firstly handle click on entity filter and only after that reset
        setTimeout(() => {
          // ternary handles case of 2 selections one by one (checks if previous selection is valid before reset)
          this.currentSelection =
            this.currentSelection === selection ? null : this.currentSelection;
          this.cd.markForCheck();
          this.documentEventListenerService.removeMouseupListener(listener);
        });
      }
    );
  }

  public onEntitySelected(entity: FilterEntityModel): void {
    if (this.currentSelection) {
      this.currentSelection.parts[this.currentSelection.markIndex].entityType =
        entity.name.system;

      this.getPhrasesByLanguage()[
        this.currentSelection.trainingPhraseIndex
      ].parts = this.currentSelection.parts;
    }
  }

  public onRemove(index: number): void {
    this.getPhrasesByLanguage().splice(index, 1);
  }

  private getPhrasesByLanguage(): TrainingPhraseModel[] {
    return this.nameDataLanguagePipe.transform(
      this.mutableIntent.trainingPhrases
    );
  }
}
