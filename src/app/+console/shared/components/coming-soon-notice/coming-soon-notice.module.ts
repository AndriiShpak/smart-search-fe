import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ComingSoonNoticeComponent } from './coming-soon-notice.component';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [ComingSoonNoticeComponent],
  exports: [ComingSoonNoticeComponent],
})
export class ComingSoonNoticeModule {}
