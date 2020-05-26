import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { IntentModel } from '@console-shared/models';

@Component({
  selector: 'app-intents-list',
  templateUrl: './intents-list.component.html',
  styleUrls: ['./intents-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntentsListComponent {
  @Input()
  intents: IntentModel[];
}
