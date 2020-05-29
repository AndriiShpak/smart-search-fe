import { Component, ChangeDetectionStrategy } from '@angular/core';

import { LanguageEnum } from '@app/enums';
import { LanguageService } from '@app/services';

@Component({
  selector: 'app-preferences-container',
  templateUrl: './preferences-container.component.html',
  styleUrls: ['./preferences-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreferencesContainerComponent {
  public selectedLanguage$ = this.languageService.language$;

  constructor(private languageService: LanguageService) {}

  public onLanguageChange(language: LanguageEnum) {
    this.languageService.setLanguage(language);
  }
}
