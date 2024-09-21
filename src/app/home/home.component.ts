import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeinfosComponent } from '../pokeinfos/pokeinfos.component';
import { Pokeinfos } from '../pokeinfos';
import { PokemonListService } from '../pokemon-list.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PokeinfosComponent],
  template: `
  <app-pokeinfos 
  *ngFor="let pokemonList of pokemoninfos"
  [pokemonList]="pokemonList"
  ></app-pokeinfos>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  pokemonService: PokemonListService = inject(PokemonListService);
  constructor() {
    this.pokemoninfos = this.pokemonService.getAllPokemons();
  }

  pokemoninfos: Pokeinfos[] = [{
    id: 1,
    name: "pokemon",
    pic: "https://img.odcdn.com.br/wp-content/uploads/2019/05/20190507084117.jpg",
    description: "teste",
    height: 1,
    weight: 2,
    type: "type",
    category: "category",
    level: 3,
    hp: 4,
    attack: 5,
    defense: 6,
    sattack: 7,
    sdefense: 8,
    speed: 9,
    abilities: "ability",
    descabil: "descabil",
    weaknesses: "weakness",
    price: 10,
  }]

}
