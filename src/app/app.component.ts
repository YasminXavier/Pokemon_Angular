import { Component, Directive } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component'


@Component({
  selector: 'app-root',
  standalone: true,
  host: {ngSkipHydration: 'true'},
  imports: [RouterModule, PokemonCardComponent],
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
      <section class="content">
        <app-pokemon-card></app-pokemon-card>
      </section>
    </body>
  </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pokemon_Angular';
}
