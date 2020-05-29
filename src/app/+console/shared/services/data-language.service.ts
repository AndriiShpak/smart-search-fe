import { Injectable } from '@angular/core';

import { LocalStorageService, BaseLanguageService } from '@app/services';
import { DataLanguageEnum } from '@console-shared/enums';

const DATA_LANGUAGE_STORAGE_KEY = 'smart-search.data-language';

@Injectable({
  providedIn: 'root',
})
export class DataLanguageService extends BaseLanguageService<DataLanguageEnum> {
  constructor(localStorageService: LocalStorageService) {
    super(
      localStorageService,
      DATA_LANGUAGE_STORAGE_KEY,
      Object.values(DataLanguageEnum),
      DataLanguageEnum.ENGLISH
    );
  }
}
