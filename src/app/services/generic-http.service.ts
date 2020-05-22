import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GenericHttpService {
  private apiUrl = environment.api + '/api';

  constructor(private httpClient: HttpClient) {}

  public get = <T>(relativeUrl: string, queryParams: {} = {}): Observable<T> =>
    this.httpClient.get<T>(this.apiUrl + relativeUrl, { params: queryParams });

  public put = <T>(relativeUrl: string, item: T): Observable<T> =>
    this.httpClient.put<T>(this.apiUrl + relativeUrl, item);
}
