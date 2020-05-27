import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AccountContainerComponent } from './components';
import { routes } from './account.routes';
import { ComingSoonNoticeModule } from '@console-shared/components/coming-soon-notice';

@NgModule({
  declarations: [AccountContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComingSoonNoticeModule,
  ],
})
export class AccountModule {}
