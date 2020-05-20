import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentHeaderComponent {
  @Input()
  public text: string;

  @Input()
  public icon: string;
}
