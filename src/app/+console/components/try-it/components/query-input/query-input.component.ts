import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-query-input',
  templateUrl: './query-input.component.html',
  styleUrls: ['./query-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryInputComponent {
  @Output()
  search: EventEmitter<string> = new EventEmitter();

  public onEnterKey(query: string): void {
    this.search.emit(query);
  }
}
