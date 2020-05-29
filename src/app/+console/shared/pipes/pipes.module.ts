import { NgModule, ModuleWithProviders } from '@angular/core';

import { NameDataLanguagePipe } from './name-data-language.pipe';
import { NameLanguagePipe } from './name-language.pipe';

@NgModule({
  declarations: [NameDataLanguagePipe, NameLanguagePipe],
  exports: [NameDataLanguagePipe, NameLanguagePipe],
})
export class ConsolePipesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ConsolePipesModule,
      providers: [NameDataLanguagePipe, NameLanguagePipe],
    };
  }
}
