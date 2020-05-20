import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderService } from '../../../services';

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
    this.headerService.headerTitle$.next('intents.title');
    this.headerService.headerIcon$.next('emoji_objects');
  }
}
