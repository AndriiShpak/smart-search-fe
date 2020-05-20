import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';

import {
  FiltersContainerComponent,
  FiltersEntitiesListComponent,
  ListGroupItemComponent,
  FiltersItemContainerComponent,
  FiltersItemComponent,
} from './components';
import { routes } from './filters.routes';

@NgModule({
  declarations: [
    FiltersContainerComponent,
    FiltersEntitiesListComponent,
    ListGroupItemComponent,
    FiltersItemContainerComponent,
    FiltersItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatExpansionModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatChipsModule,
  ],
})
export class FiltersModule {}
