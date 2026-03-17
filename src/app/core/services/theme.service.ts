import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal<boolean>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const html = document.querySelector('html');
      if (this.isDarkMode()) {
        html?.classList.add('my-app-dark');
        localStorage.setItem('theme', 'dark');
      } else {
        html?.classList.remove('my-app-dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  toggleTheme() {
    this.isDarkMode.update(value => !value);
  }

  private getInitialTheme(): boolean {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
