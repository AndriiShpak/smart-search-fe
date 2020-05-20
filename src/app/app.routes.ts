import { Routes, PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export const routes: Routes = [
  {
    path: 'console',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./+console/console.module').then((m) => m.ConsoleModule),
      },
    ],
  },
  { path: '', redirectTo: 'console', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

export class PreloadSelectedModulesList implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? load() : of(null);
  }
}
