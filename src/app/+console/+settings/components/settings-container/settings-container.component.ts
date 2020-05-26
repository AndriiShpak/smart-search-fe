import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HeaderService } from '@console-shared/services';
import { SETTINGS_SECTION } from '@console-shared/constants';

@Component({
  selector: 'app-settings-container',
  templateUrl: './settings-container.component.html',
  styleUrls: ['./settings-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsContainerComponent {
  constructor(private headerService: HeaderService) {
    this.registerHeader();
  }

  private registerHeader(): void {
    this.headerService.headerTitle$.next(SETTINGS_SECTION.text);
    this.headerService.headerIcon$.next(SETTINGS_SECTION.icon);
  }
}
