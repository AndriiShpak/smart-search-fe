import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ValidationsContainerComponent } from './components';
import { routes } from './validations.routes';

@NgModule({
  declarations: [ValidationsContainerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ValidationsModule {}
