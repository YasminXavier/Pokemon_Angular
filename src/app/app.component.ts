import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  host: {ngSkipHydration: 'true'},
  imports: [RouterModule, HomeComponent],
  template: `
  <main>
    <body>
      <header>
        <div class="head">
          <img class="logo" src="/assets/pokeshop.png"/>
          <section class="search">
            <input type="text" placeholder="Search product"/>
            <button class="primary" type="button"> Search</button>
          </section>
        </div>
        <div>
          <ul>
            <li [routerLink]="['/']"><strong> Pokemons </strong></li>
            <li><strong> Locations </strong></li>
            <li><strong> Berries </strong></li>
            <li><strong> Itens </strong></li>
          </ul>
        </div>
      </header>
      <section>
        <router-outlet></router-outlet>
      </section>
    </body>
  </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pokemon_Angular';
}
