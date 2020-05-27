import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnInit,
  OnDestroy,
  OnChanges,
} from '@angular/core';

import { TrainingPhrasePartModel } from '@console-shared/models';
import { stringToColour } from '@console-shared/utils';
import { TrainingPhraseSelectionChangeModel } from '@console-intents/models';
import { DocumentEventListenerService } from '@app/services';

@Component({
  selector: 'app-highlight-input',
  templateUrl: './highlight-input.component.html',
  styleUrls: ['./highlight-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighlightInputComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  parts: TrainingPhrasePartModel[];
  @Input()
  isAddMode: boolean;

  @Output()
  inputChanged: EventEmitter<TrainingPhrasePartModel[]> = new EventEmitter();

  @Output()
  selectionChanged: EventEmitter<
    TrainingPhraseSelectionChangeModel
  > = new EventEmitter();

  @Output()
  removed: EventEmitter<void> = new EventEmitter();

  @ViewChild('editableContent') editableContent: ElementRef;

  colorsByIndex: string[] = [];

  private eventListener: () => void | null;

  constructor(
    private elRef: ElementRef,
    private documentEventListenerService: DocumentEventListenerService
  ) {}

  public ngOnInit(): void {
    this.eventListener = this.documentEventListenerService.addMouseupListener(
      this.onMouseUpSelectionCondition.bind(this),
      this.handleSelection.bind(this)
    );
  }

  public ngOnDestroy(): void {
    this.documentEventListenerService.removeMouseupListener(this.eventListener);
  }

  public ngOnChanges(): void {
    if (this.parts) {
      this.colorsByIndex = this.parts.map((part) =>
        part.entityType ? stringToColour(part.entityType) : ''
      );
    }
  }

  public onEnterKey(): void {
    const parts = this.getPartsFromEditableContentNodes();
    // Removed enter key (last item)
    parts.splice(parts.length - 1, 1);
    this.onSave(parts);
  }

  public onFocusOut(): void {
    this.onSave(this.getPartsFromEditableContentNodes());
  }

  public onRemove(): void {
    this.removed.emit();
  }

  private onSave(parts: TrainingPhrasePartModel[]): void {
    this.inputChanged.emit(parts);

    if (this.isAddMode) {
      this.editableContent.nativeElement.innerHTML = '';
    }
  }

  private onMouseUpSelectionCondition(): boolean {
    const selection = window.getSelection();

    return (
      // Selection is inside of current item and not selection inside already marked part
      selection.anchorNode?.parentElement?.parentElement ===
        this.elRef.nativeElement &&
      !this.isAddMode &&
      selection &&
      // Selection is inside one part of text
      selection.anchorNode === selection.focusNode &&
      // Selection is not 0 character long
      selection.type !== 'Caret'
    );
  }

  private handleSelection(): void {
    const selection = window.getSelection();
    const nodes = this.getMeaningfulEditableContentNodes();
    const indexOfChange = nodes.indexOf(selection.anchorNode as HTMLElement);
    const parts = this.getPartsFromEditableContentNodes(nodes);
    const splittedChange = this.splitItemBySelection(
      parts,
      indexOfChange,
      Math.min(selection.anchorOffset, selection.focusOffset),
      Math.max(selection.anchorOffset, selection.focusOffset)
    );

    parts.splice(indexOfChange, 1, ...splittedChange);

    this.selectionChanged.emit({
      parts,
      markIndex: indexOfChange + 1,
    });
  }

  private getMeaningfulEditableContentNodes(): HTMLElement[] {
    return Array.from(
      this.editableContent.nativeElement.childNodes as HTMLElement[]
    ).filter((item) => item.nodeName !== '#comment');
  }

  private getPartsFromEditableContentNodes(
    nodes?: HTMLElement[]
  ): TrainingPhrasePartModel[] {
    nodes = nodes || this.getMeaningfulEditableContentNodes();

    return nodes.map((node) => ({
      text: node.innerText || node.textContent,
      entityType: node.dataset?.entity || '',
    }));
  }

  private splitItemBySelection(
    parts: TrainingPhrasePartModel[],
    indexOfChange: number,
    startIndex: number,
    endIndex: number
  ): TrainingPhrasePartModel[] {
    const textForSplit = parts[indexOfChange].text;

    return [
      {
        text: textForSplit.substring(0, startIndex),
        entityType: '',
      },
      {
        text: textForSplit.substring(startIndex, endIndex),
        entityType: '',
      },
      {
        text: textForSplit.substring(endIndex),
        entityType: '',
      },
    ];
  }
}
