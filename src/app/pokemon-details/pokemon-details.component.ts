import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonListService } from '../pokemon-list.service';
import { Pokeinfos } from '../pokeinfos';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule],
  template: `
  <body class="screem">
    <div class="part1">
    <section>
      <img  [src]="pokemonList?.pic" alt="monstre"/>
    </section>
    <section class="informations">
      <section class="catalog">
        <p style="color: #D19E04;"> Category: {{pokemonList?.category}} | </p>
        <p style="color: #D19E04;"> Type : {{pokemonList?.type}}</p>
      </section>
      <section class="title">
        <h3> <strong>{{pokemonList?.name}} </strong></h3>
        <h4 style="width: 100px;"> $ {{pokemonList?.price}}</h4>
        <button> Add to bag </button>
      </section>
        <p> {{pokemonList?.description}}</p>
        <section>
      <ul>
        <li> <strong>Height:</strong> {{pokemonList?.height}} m</li>
        <li> <strong>Weight:</strong> {{pokemonList?.weight}} Kg</li>
        <li> <strong>Evolution:</strong> level {{pokemonList?.level}} </li>
        <li> <strong>Ability:</strong> {{pokemonList?.abilities}} - {{pokemonList?.descabil}} </li>
        <li> <strong>Weakness:</strong> {{pokemonList?.weaknesses}} </li>
      </ul>
    </section>
    <section style="display: flex; flex-direction: row; gap: 50px; align-items: flex-end;">
      <table>
        <thead>
        <tr>
          <th> HP </th>
          <th> Attack </th>
          <th> Defense </th>
          <th> Special Attack </th>
          <th> Special Defense </th>
          <th> Speed </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th> {{pokemonList?.hp}} </th>
          <th> {{pokemonList?.attack}} </th>
          <th> {{pokemonList?.defense}} </th>
          <th> {{pokemonList?.sattack}} </th>
          <th> {{pokemonList?.sdefense}} </th>
          <th> {{pokemonList?.speed}} </th>
        </tr>
        </tbody>
      </table>
      <a style="color: #D19E04; border: 0.5px solid #D19E04; padding: 5px 10px; border-radius: 5px"> see next product > </a>
    </section>
      </section>
    </div>
</body>
  `,
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  pokemonService = inject(PokemonListService);
  pokemonList: Pokeinfos | undefined;
  constructor() {
    const pokemonId = parseInt(this.route.snapshot.params['id'], 10);
    this.pokemonService.getPokemonById(pokemonId).then((pokemonList) => {
      this.pokemonList = pokemonList;
    });
  }
}
