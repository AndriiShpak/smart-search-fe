import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { NameMapModel } from '@console-shared/models';
import { LanguageEnum } from '@app/enums';
import { LanguageService } from '@app/services';

@Pipe({ name: 'nameLanguage', pure: false })
export class NameLanguagePipe implements PipeTransform, OnDestroy {
  private subscription: Subscription;

  private latestLanguage: LanguageEnum;

  constructor(private languageService: LanguageService) {}

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  transform<T>(nameMap: NameMapModel<T>): T {
    if (!this.subscription) {
      this.subscription = this.languageService.language$.subscribe(
        (language) => {
          this.latestLanguage = language;
        }
      );
    }

    return nameMap[this.latestLanguage];
  }
}
