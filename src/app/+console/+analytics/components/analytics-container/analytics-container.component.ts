import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HeaderService } from '../../../services';
import { ANALYTICS_SECTION } from '../../../console.constants';

@Component({
  selector: 'app-analytics-container',
  templateUrl: './analytics-container.component.html',
  styleUrls: ['./analytics-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalyticsContainerComponent {
  constructor(private headerService: HeaderService) {
    this.registerHeader();
  }

  private registerHeader(): void {
    this.headerService.headerTitle$.next(ANALYTICS_SECTION.text);
    this.headerService.headerIcon$.next(ANALYTICS_SECTION.icon);
  }
}
