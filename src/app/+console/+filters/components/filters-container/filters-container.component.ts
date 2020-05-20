import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HeaderService } from '../../../services';
import { FILTER_SECTION } from '../../../console.constants';

@Component({
  selector: 'app-filters-container',
  templateUrl: './filters-container.component.html',
  styleUrls: ['./filters-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersContainerComponent {
  constructor(private headerService: HeaderService) {
    this.registerHeader();
  }

  private registerHeader(): void {
    this.headerService.headerTitle$.next(FILTER_SECTION.text);
    this.headerService.headerIcon$.next(FILTER_SECTION.icon);
  }
}
