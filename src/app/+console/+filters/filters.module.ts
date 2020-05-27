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
  FiltersItemContainerComponent,
  FiltersItemComponent,
} from './components';
import { routes } from './filters.routes';
import { ConsolePipesModule } from '@console-shared/pipes';
import { ListGroupItemModule } from '@console-shared/components/list-group-item';
import { ListGroupFilterModule } from '@console-shared/components/list-group-filter';
import { ComingSoonNoticeModule } from '@console-shared/components/coming-soon-notice';

@NgModule({
  declarations: [
    FiltersContainerComponent,
    FiltersEntitiesListComponent,
    FiltersItemContainerComponent,
    FiltersItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ConsolePipesModule,
    ListGroupItemModule,
    ListGroupFilterModule,
    ComingSoonNoticeModule,
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
