import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HeaderService } from '../../../services';
import { ACCOUNT_SECTION } from '../../../console.constants';

@Component({
  selector: 'app-account-container',
  templateUrl: './account-container.component.html',
  styleUrls: ['./account-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountContainerComponent {
  constructor(private headerService: HeaderService) {
    this.registerHeader();
  }

  private registerHeader(): void {
    this.headerService.headerTitle$.next(ACCOUNT_SECTION.text);
    this.headerService.headerIcon$.next(ACCOUNT_SECTION.icon);
  }
}
