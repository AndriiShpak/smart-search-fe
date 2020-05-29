import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

import { DataLanguageSelectionComponent } from './data-language-selection.component';

@NgModule({
  imports: [CommonModule, MatChipsModule],
  declarations: [DataLanguageSelectionComponent],
  exports: [DataLanguageSelectionComponent],
})
export class DataLanguageSelectionModule {}
