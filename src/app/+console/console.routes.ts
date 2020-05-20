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
      {
        path: ConsoleRoutesEnum.SETTINGS,
        loadChildren: () =>
          import('./+settings/settings.module').then((m) => m.SettingsModule),
        data: childRouteConfiguration,
      },
      {
        path: ConsoleRoutesEnum.ANALYTICS,
        loadChildren: () =>
          import('./+analytics/analytics.module').then(
            (m) => m.AnalyticsModule
          ),
        data: childRouteConfiguration,
      },
      {
        path: ConsoleRoutesEnum.VALIDATIONS,
        loadChildren: () =>
          import('./+validations/validations.module').then(
            (m) => m.ValidationsModule
          ),
        data: childRouteConfiguration,
      },
      {
        path: ConsoleRoutesEnum.ACCOUNT,
        loadChildren: () =>
          import('./+account/account.module').then((m) => m.AccountModule),
        data: childRouteConfiguration,
      },
    ],
  },
];
