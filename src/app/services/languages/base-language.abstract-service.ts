import { Observable, BehaviorSubject } from 'rxjs';

import { LocalStorageService } from '@app/services';

export abstract class BaseLanguageService<T> {
  public language$: Observable<T>;

  public get language(): T {
    return this.languageSubj$.value;
  }

  private languageSubj$: BehaviorSubject<T>;

  constructor(
    private localStorageService: LocalStorageService,
    private storageKey: string,
    private availableValues: string[],
    defaultLanguage: T
  ) {
    this.languageSubj$ = new BehaviorSubject(defaultLanguage);
    this.language$ = this.languageSubj$.asObservable();
    this.initLanguage();
  }

  public setLanguage(language: T): void {
    this.languageSubj$.next(language);
    this.setLanguageToStorage(language);
  }

  private initLanguage(): void {
    const languageFromStorage = this.localStorageService.getItem(
      this.storageKey
    );

    if (
      languageFromStorage &&
      this.availableValues.includes(languageFromStorage)
    ) {
      this.languageSubj$.next(languageFromStorage);
    }
  }

  private setLanguageToStorage(language: T): void {
    this.localStorageService.setItem(this.storageKey, language);
  }
}
