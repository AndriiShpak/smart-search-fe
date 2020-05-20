import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AccountContainerComponent } from './components';
import { routes } from './account.routes';

@NgModule({
  declarations: [AccountContainerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AccountModule {}
