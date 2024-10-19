import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ResizeListenerService implements OnDestroy {
  private destroy$ = new Subject<void>(); // To manage unsubscription

  constructor() {}

  // Observable that emits the window size
  resize$: Observable<{ width: number; height: number }> = fromEvent(
    window,
    'resize'
  ).pipe(
    debounceTime(200), // Avoid excessive updates
    map(() => ({
      width: window.innerWidth,
      height: window.innerHeight,
    })),
    startWith({ width: window.innerWidth, height: window.innerHeight }), // Initial size
    takeUntil(this.destroy$) // Clean up on destroy
  );

  smallScreen$: Observable<boolean> = fromEvent(
    window,
    'resize'
  ).pipe(
    debounceTime(200), // Avoid excessive updates
    map(() => window.innerWidth <=768),
    startWith(window.innerWidth <=768), // Initial size
    takeUntil(this.destroy$) // Clean up on destroy
  );

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
