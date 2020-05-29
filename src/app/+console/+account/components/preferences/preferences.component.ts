import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

import { LanguageEnum } from '@app/enums';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreferencesComponent {
  @Input()
  public selectedLanguage: LanguageEnum;

  @Output()
  public languageChanged: EventEmitter<LanguageEnum> = new EventEmitter();

  public availableLanguages = Object.values(LanguageEnum);

  public onLanguageChange(event: MatSelectChange): void {
    this.languageChanged.emit(event.value);
  }
}
