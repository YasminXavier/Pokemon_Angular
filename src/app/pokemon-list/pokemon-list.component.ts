import { Component } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  template: `
  <app-pokemon-card
  *ngFor="let pokemon of pokemonService.pokemons"
  [pokemon]="pokemon"></app-pokemon-card>`,
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  constructor(
    public pokemonService: PokemonService,
  ) {
  }
}
