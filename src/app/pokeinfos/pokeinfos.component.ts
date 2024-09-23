import { Component, Input } from '@angular/core';
import { Pokeinfos } from '../pokeinfos';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokeinfos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <body class="body">
      <section class="product">
        <section class="image"><img  [src]="pokemonList.pic" alt="monstre"/></section>
        <h4><strong> {{pokemonList.name}} </strong></h4>
        <div class="infos">
          <p class="price"> {{pokemonList.type}}</p>
          <p> $ {{pokemonList.price}}</p>
        </div>
        <a [routerLink]="['/details', pokemonList.id]">Learn More</a>
      </section>
    </body>
  `,
  styleUrl: './pokeinfos.component.css'
})
export class PokeinfosComponent {

  @Input()
  pokemonList!: Pokeinfos;

}
