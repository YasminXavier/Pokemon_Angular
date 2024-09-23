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
  pokemonService: PokemonListService = inject(PokemonListService);
  constructor() {
    this.pokemoninfos = this.pokemonService.getAllPokemons();
  }

}
