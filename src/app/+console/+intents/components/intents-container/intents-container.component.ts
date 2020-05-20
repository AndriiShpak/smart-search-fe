import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderService } from '../../../services';
import { INTENTS_SECTION } from '../../../console.constants';

@Component({
  selector: 'app-intents-container',
  templateUrl: './intents-container.component.html',
  styleUrls: ['./intents-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntentsContainerComponent {
  constructor(private headerService: HeaderService) {
    this.registerHeader();
  }

  private registerHeader(): void {
    this.headerService.headerTitle$.next(INTENTS_SECTION.text);
    this.headerService.headerIcon$.next(INTENTS_SECTION.icon);
  }
}
