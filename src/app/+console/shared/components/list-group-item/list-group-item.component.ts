import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-list-group-item',
  templateUrl: './list-group-item.component.html',
  styleUrls: ['./list-group-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListGroupItemComponent {
  @Input()
  public redirectId: string;

  @Input()
  public icon: string;

  @Input()
  public isTextOnly: boolean;

  @Output()
  public buttonClick: EventEmitter<void> = new EventEmitter();
}
