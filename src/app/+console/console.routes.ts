import { Routes } from '@angular/router';

import { ContentContainerComponent } from './components';
import { ConsoleRoutesEnum } from './enums';

const childRouteConfiguration = {
  // Configured for preload with this flag in PreloadSelectedModulesList class
  preload: true,
};

export const routes: Routes = [
  {
    path: '',
    component: ContentContainerComponent,
    children: [
      {
        path: '',
        redirectTo: ConsoleRoutesEnum.INTENTS,
      },
      {
        path: ConsoleRoutesEnum.INTENTS,
        loadChildren: () =>
          import('./+intents/intents.module').then((m) => m.IntentsModule),
        data: childRouteConfiguration,
      },
      {
        path: ConsoleRoutesEnum.FILTERS,
        loadChildren: () =>
          import('./+filters/filters.module').then((m) => m.FiltersModule),
        data: childRouteConfiguration,
      },
    ],
  },
];
