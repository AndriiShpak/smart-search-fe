import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import {
  IntentsContainerComponent,
  IntentsListComponent,
  IntentsItemContainerComponent,
  IntentsItemComponent,
  IntentsEntitiesListComponent,
  HighlightInputComponent,
} from './components';
import { routes } from './intents.routes';
import { ListGroupItemModule } from '@console-shared/components/list-group-item';
import { ConsolePipesModule } from '@console-shared/pipes';
import { ListGroupFilterModule } from '@console-shared/components/list-group-filter';
import { ComingSoonNoticeModule } from '@console-shared/components/coming-soon-notice';

@NgModule({
  declarations: [
    IntentsContainerComponent,
    IntentsListComponent,
    IntentsItemContainerComponent,
    IntentsItemComponent,
    IntentsEntitiesListComponent,
    HighlightInputComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ListGroupItemModule,
    ListGroupFilterModule,
    ComingSoonNoticeModule,
    ConsolePipesModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class IntentsModule {}
