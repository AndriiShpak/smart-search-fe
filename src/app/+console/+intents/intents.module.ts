import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IntentsContainerComponent } from './components';
import { routes } from './intents.routes';

@NgModule({
  declarations: [IntentsContainerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class IntentsModule {}
