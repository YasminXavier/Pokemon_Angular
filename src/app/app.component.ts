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
        <div class="search">
          <img class="logo" src="/assets/pokeshop.png"/>
          <input type="text" placeholder="Search product"/>
          <button class="primary" type="button"> Search</button>
        </div>
        <div>
          <ul>
            <li> Pokemons </li>
            <li> Locations </li>
            <li> Berries </li>
            <li> Itens </li>
          </ul>
        </div>
      </header>
      <section>
        <app-home></app-home>
      </section>
    </body>
  </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pokemon_Angular';
}
