import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button';
import { ThemeService } from './core/services/theme.service';
import { LoaderComponent } from './shared/components/loader/loader';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';
import { Toast } from 'primeng/toast';
import { ConfirmDialog } from 'primeng/confirmdialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent, Toast, ConfirmDialog, Button],
  templateUrl: './app.html',
})
export class App {
  public themeService = inject(ThemeService);
  public toggleDarkMode() {
    this.themeService.toggleTheme();
  }
}
