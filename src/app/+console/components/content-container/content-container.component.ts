import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HeaderService } from '@console-shared/services';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentContainerComponent {
  public headerText$ = this.headerService.headerTitle$;
  public headerIcon$ = this.headerService.headerIcon$;

  constructor(private headerService: HeaderService) {}
}
