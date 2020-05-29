import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { BaseStorageService } from './base-storage.abstract-service';
import { StorageServiceModel } from '@app/models';

@Injectable({ providedIn: 'root' })
export class SessionStorageService extends BaseStorageService
  implements StorageServiceModel {
  constructor(@Inject(PLATFORM_ID) platformId: string) {
    super(platformId, 'sessionStorage');
  }

  public setItem(key: string, value: any, isJson?: boolean): boolean {
    return super.setItem(key, value, isJson);
  }

  public removeItem(key: string): boolean {
    return super.removeItem(key);
  }

  public getItem(key: string, isJson?: boolean): any | undefined {
    return super.getItem(key, isJson);
  }
}
