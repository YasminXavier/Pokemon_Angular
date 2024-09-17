import { Component, Input } from '@angular/core';
import { Pokemons } from '../pokemons';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-pokemon-component',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
  <section class="listing">
      <h4> {{pokemonList.name}}</h4>
    </section>`,
  styleUrl: './pokemon-component.component.css'
})
export class PokemonComponent {
  @Input() pokemonList!: Pokemons;
  /* You have to add the ! because the input is expecting the value 
  to be passed. In this case, there is no default value. 
  In our example application case we know that the value will be 
  passed in - this is by design*/
}
