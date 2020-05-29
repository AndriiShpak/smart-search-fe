import { Injectable } from '@angular/core';

import { LocalStorageService } from '@app/services/storages/local-storage.service';
import { BaseLanguageService } from './base-language.abstract-service';
import { LanguageEnum } from '@app/enums';

const LANGUAGE_STORAGE_KEY = 'smart-search.language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService extends BaseLanguageService<LanguageEnum> {
  constructor(localStorageService: LocalStorageService) {
    super(
      localStorageService,
      LANGUAGE_STORAGE_KEY,
      Object.values(LanguageEnum),
      LanguageEnum.ENGLISH
    );
  }
}
