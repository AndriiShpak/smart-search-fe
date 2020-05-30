import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { QueryDisplayModel } from '@console-shared/models';

@Component({
  selector: 'app-try-it-result',
  templateUrl: './try-it-result.component.html',
  styleUrls: ['./try-it-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TryItResultComponent {
  @Input()
  queryResult: QueryDisplayModel;
}
