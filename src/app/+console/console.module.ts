import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

import {
  ContentContainerComponent,
  ContentHeaderComponent,
  SideMenuModule,
  TryItModule,
} from './components';
import { routes } from './console.routes';

@NgModule({
  declarations: [ContentContainerComponent, ContentHeaderComponent],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    MatIconModule,
    CommonModule,
    SideMenuModule,
    TryItModule,
  ],
})
export class ConsoleModule {}
