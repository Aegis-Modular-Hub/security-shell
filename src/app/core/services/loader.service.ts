import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loadingSignal = signal<boolean>(false);

  public readonly isLoading = this.loadingSignal.asReadonly();

  public show() {
    this.loadingSignal.set(true);
  }

  public hide() {
    this.loadingSignal.set(false);
  }
}
