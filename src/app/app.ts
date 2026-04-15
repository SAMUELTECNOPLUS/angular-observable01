import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageComponent } from './page.component/page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular00');
}
