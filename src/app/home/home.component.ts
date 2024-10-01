import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeinfosComponent } from '../pokeinfos/pokeinfos.component';
import { Pokeinfos } from '../pokeinfos';
import { PokemonListService } from '../pokemon-list.service';
import { Ability } from '../abilities';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PokeinfosComponent],
  template: `
  <h3 style="margin: 30px;"> Pokemons available</h3>
  <section class="productList">
    <app-pokeinfos 
    *ngFor="let pokemonList of pokemoninfos"
      [pokemonList]="pokemonList">
  </app-pokeinfos>
  </section>
  `, 
  styleUrl: './home.component.css'
})
export class HomeComponent {

  pokemoninfos: Pokeinfos[] = [];
  abInfos: Ability[] = [];
  pokemonService: PokemonListService = inject(PokemonListService);
  constructor() {
    this.pokemonService.getAllPokemons().then((pokemoninfos: Pokeinfos[]) => {
      this.pokemoninfos = pokemoninfos;
      /*this.filteredPokemonList = pokemoninfos;*/
    });


    this.pokemonService.getAllAbilities().then((abInfos: Ability[]) => {
      this.abInfos = abInfos;
    });
  }

}
