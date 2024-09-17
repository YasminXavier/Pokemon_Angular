import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {PokemonComponent} from './pokemon-component/pokemon-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, PokemonComponent],
  template: `
    <main>
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
        <app-pokemon-component></app-pokemon-component>
      </section>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pokemon_Angular';
}
