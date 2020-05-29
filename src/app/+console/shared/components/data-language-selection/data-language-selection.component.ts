import { Component, ChangeDetectionStrategy } from '@angular/core';

import { DataLanguageService } from '@console-shared/services';
import { DataLanguageEnum } from '@console-shared/enums';

@Component({
  selector: 'app-data-language-selection',
  templateUrl: './data-language-selection.component.html',
  styleUrls: ['./data-language-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataLanguageSelectionComponent {
  public selectedLanguage$ = this.dataLanguageService.language$;
  public availableLanguages = Object.values(DataLanguageEnum);

  constructor(private dataLanguageService: DataLanguageService) {}

  public onLanguageChange(language: DataLanguageEnum): void {
    this.dataLanguageService.setLanguage(language);
  }
}
