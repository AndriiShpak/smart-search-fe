import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public headerTitle$: ReplaySubject<string> = new ReplaySubject(1);
  public headerIcon$: ReplaySubject<string> = new ReplaySubject(1);
}
