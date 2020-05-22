import { NgModule } from '@angular/core';

import { NameMapPipe } from './name-map.pipe';

@NgModule({
  declarations: [NameMapPipe],
  exports: [NameMapPipe],
})
export class ConsolePipesModule {}
