import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { SectionConfigModel } from '@console-shared/models';

@Component({
  selector: 'app-side-item',
  templateUrl: './side-item.component.html',
  styleUrls: ['./side-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideItemComponent {
  @Input()
  public item: SectionConfigModel;
}
