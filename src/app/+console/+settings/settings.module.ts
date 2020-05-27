import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SettingsContainerComponent } from './components';
import { routes } from './settings.routes';
import { ComingSoonNoticeModule } from '@console-shared/components/coming-soon-notice';

@NgModule({
  declarations: [SettingsContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComingSoonNoticeModule,
  ],
})
export class SettingsModule {}
