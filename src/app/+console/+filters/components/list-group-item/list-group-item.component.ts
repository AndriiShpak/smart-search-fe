import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { FilterEntityModel } from '../../../models';

@Component({
  selector: 'app-list-group-item',
  templateUrl: './list-group-item.component.html',
  styleUrls: ['./list-group-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListGroupItemComponent {
  @Input()
  public item: FilterEntityModel;
}
