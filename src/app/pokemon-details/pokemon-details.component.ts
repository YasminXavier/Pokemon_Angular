import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonListService } from '../pokemon-list.service';
import { Pokeinfos } from '../pokeinfos';
import { Ability } from '../abilities';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <body class="screem">
    <div class="part1">
    <section>
      <img  [src]="pokemonList?.pic" alt="monstre"/>
    </section>
    <section class="informations">
      <section class="catalog">
        <p> Category: {{pokemonList?.category}} | </p>
        <section class="type">
          <p><strong> Type: </strong></p>
          <p *ngFor="let ptype of pokemonList?.type"> {{ptype.name}}</p>
        </section>
      </section>
      <section class="title">
        <h3 > <strong>{{pokemonList?.name}} </strong></h3>
      </section>
        <p> {{pokemonList?.description}}</p>
        <section>
      <ul>
        <li> <strong>Height:</strong> {{pokemonList?.height}} m</li>
        <li> <strong>Weight:</strong> {{pokemonList?.weight}} Kg</li>
        <li> <strong>Evolution:</strong> level {{pokemonList?.level}} </li>
        <li> <strong>Ability:</strong> {{abilList?.name}}:  {{abilList?.descriprion}} </li>
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
      <a> see next item > </a>
    </section>
      </section>
    </div>
</body>
  `,
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent {


  pokemonService: PokemonListService = inject(PokemonListService);

  route: ActivatedRoute = inject(ActivatedRoute);
  pokemonList: Pokeinfos | undefined;
  abilList: Ability | undefined;

  constructor() {
    const pokemonId = parseInt(this.route.snapshot.params['id'], 10);
    this.pokemonService.getPokemonById(pokemonId).then((pokemonList: any) => {
      this.pokemonList = pokemonList;
    });


    const abilName = parseInt(this.route.snapshot.params['name'], 10);
    this.pokemonService.getAbilitieById(abilName).then((abilList: any) => {
      this.abilList = abilList;
    });
  }

}
