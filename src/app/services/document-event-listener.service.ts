import { Injectable, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const EVENT_NAMES = {
  mouseUp: 'mouseup',
};

@Injectable({
  providedIn: 'root',
})
export class DocumentEventListenerService {
  constructor(
    private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: string
  ) {}

  public addMouseupListener = (
    condition: () => boolean,
    handler: () => void
  ): (() => void | null) => {
    return this.addListener(EVENT_NAMES.mouseUp, condition, handler);
  };

  public removeMouseupListener = (handler: () => void | null): void => {
    this.removeListener(EVENT_NAMES.mouseUp, handler);
  };

  private addListener = (
    listenerName: string,
    condition: () => boolean,
    handler: () => void
  ): (() => void | null) => {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    function internalHandler() {
      if (condition()) {
        this.zone.run(() => {
          handler();
        });
      }
    }

    const internalHandlerWithContext = internalHandler.bind(this);

    this.zone.runOutsideAngular(() => {
      document.addEventListener(listenerName, internalHandlerWithContext);
    });

    return internalHandlerWithContext;
  };

  private removeListener = (
    listenerName: string,
    handler: () => void
  ): void => {
    if (handler) {
      document.removeEventListener(listenerName, handler);
    }
  };
}
