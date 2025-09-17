import { Component } from '@angular/core';
import { Home } from './home/home';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Home, RouterModule],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="logo.png" alt="logo" />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'homes';
}
