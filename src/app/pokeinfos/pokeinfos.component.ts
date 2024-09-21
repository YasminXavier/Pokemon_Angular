import { Component, Input } from '@angular/core';
import { Pokeinfos } from '../pokeinfos';

@Component({
  selector: 'app-pokeinfos',
  standalone: true,
  imports: [],
  template: `
    <body>
      <section class="product">
        <img class="image" [src]="pokemonList.pic" alt="monstre"/>
        <h3> {{pokemonList.name}} </h3>
        <h4> $ {{pokemonList.price}}</h4>
      </section>
    </body>
  `,
  styleUrl: './pokeinfos.component.css'
})
export class PokeinfosComponent {

  @Input()
  pokemonList!: Pokeinfos;

}
