import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { NameMapModel } from '@console-shared/models';
import { DataLanguageService } from '@console-shared/services';
import { DataLanguageEnum } from '@console-shared/enums';

@Pipe({ name: 'nameDataLanguage', pure: false })
export class NameDataLanguagePipe implements PipeTransform, OnDestroy {
  private subscription: Subscription;

  private latestLanguage: DataLanguageEnum;

  constructor(private dataLanguageService: DataLanguageService) {}

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  transform<T>(nameMap: NameMapModel<T>): T {
    if (!this.subscription) {
      this.subscription = this.dataLanguageService.language$.subscribe(
        (language) => {
          this.latestLanguage = language;
        }
      );
    }

    return nameMap[this.latestLanguage];
  }
}
