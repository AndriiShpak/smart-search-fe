import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HeaderService } from '../../../services';
import { VALIDATION_SECTION } from '../../../console.constants';

@Component({
  selector: 'app-validations-container',
  templateUrl: './validations-container.component.html',
  styleUrls: ['./validations-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidationsContainerComponent {
  constructor(private headerService: HeaderService) {
    this.registerHeader();
  }

  private registerHeader(): void {
    this.headerService.headerTitle$.next(VALIDATION_SECTION.text);
    this.headerService.headerIcon$.next(VALIDATION_SECTION.icon);
  }
}
