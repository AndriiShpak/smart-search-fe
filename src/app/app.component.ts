import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  OnDestroy,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { LanguageService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnDestroy {
  private destroy$ = new Subject();

  constructor(
    private iconRegistry: MatIconRegistry,
    private translateService: TranslateService,
    private languageService: LanguageService
  ) {
    this.registerIcons();
    this.registerLanguages();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private registerIcons(): void {
    this.iconRegistry.setDefaultFontSetClass('material-icons-outlined');
  }

  private registerLanguages(): void {
    this.languageService.language$
      .pipe(takeUntil(this.destroy$))
      .subscribe((language) => {
        this.translateService.use(language);
      });
  }
}
