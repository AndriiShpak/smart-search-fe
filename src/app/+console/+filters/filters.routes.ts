import { Routes } from '@angular/router';

import {
  FiltersContainerComponent,
  FiltersItemContainerComponent,
} from './components';

export const routes: Routes = [
  {
    path: '',
    component: FiltersContainerComponent,
  },
  {
    path: ':id',
    component: FiltersItemContainerComponent,
  },
];
