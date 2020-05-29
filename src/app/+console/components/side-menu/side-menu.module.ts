import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

import {
  SideMenuContainerComponent,
  SideLogoComponent,
  SideItemComponent,
} from './components';

@NgModule({
  declarations: [
    SideMenuContainerComponent,
    SideLogoComponent,
    SideItemComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [SideMenuContainerComponent],
})
export class SideMenuModule {}
