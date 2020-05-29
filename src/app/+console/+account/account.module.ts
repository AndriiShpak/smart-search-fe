import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';

import {
  AccountContainerComponent,
  PreferencesComponent,
  AccountComponent,
  PreferencesContainerComponent,
} from './components';
import { routes } from './account.routes';
import { ComingSoonNoticeModule } from '@console-shared/components/coming-soon-notice';

@NgModule({
  declarations: [
    AccountContainerComponent,
    AccountComponent,
    PreferencesComponent,
    PreferencesContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComingSoonNoticeModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    TranslateModule,
  ],
})
export class AccountModule {}
