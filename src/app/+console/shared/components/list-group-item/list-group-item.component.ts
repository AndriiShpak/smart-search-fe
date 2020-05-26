import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

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
}
