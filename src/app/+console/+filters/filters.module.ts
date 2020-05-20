import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FiltersContainerComponent } from './components';
import { routes } from './filters.routes';

@NgModule({
  declarations: [FiltersContainerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FiltersModule {}
