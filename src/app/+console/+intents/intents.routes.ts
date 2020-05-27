import { Routes } from '@angular/router';

import {
  IntentsContainerComponent,
  IntentsItemContainerComponent,
} from './components';

export const routes: Routes = [
  {
    path: '',
    component: IntentsContainerComponent,
  },
  {
    path: ':id',
    component: IntentsItemContainerComponent,
  },
];
