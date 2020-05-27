import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AnalyticsContainerComponent } from './components';
import { routes } from './analytics.routes';
import { ComingSoonNoticeModule } from '@console-shared/components/coming-soon-notice';

@NgModule({
  declarations: [AnalyticsContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComingSoonNoticeModule,
  ],
})
export class AnalyticsModule {}
