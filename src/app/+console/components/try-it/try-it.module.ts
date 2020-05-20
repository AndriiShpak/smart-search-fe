import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import {
  TryItContainerComponent,
  QueryInputComponent,
  TryItResultComponent,
  TryItPlaceholderComponent,
} from './components';

@NgModule({
  declarations: [
    TryItContainerComponent,
    QueryInputComponent,
    TryItResultComponent,
    TryItPlaceholderComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [TryItContainerComponent],
})
export class TryItModule {}
