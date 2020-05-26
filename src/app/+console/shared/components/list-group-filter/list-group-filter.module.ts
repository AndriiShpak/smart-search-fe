import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ListGroupFilterComponent } from './list-group-filter.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatInputModule, MatButtonModule],
  declarations: [ListGroupFilterComponent],
  exports: [ListGroupFilterComponent],
})
export class ListGroupFilterModule {}
