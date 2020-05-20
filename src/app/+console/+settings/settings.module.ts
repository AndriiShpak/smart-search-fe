import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SettingsContainerComponent } from './components';
import { routes } from './settings.routes';

@NgModule({
  declarations: [SettingsContainerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SettingsModule {}
