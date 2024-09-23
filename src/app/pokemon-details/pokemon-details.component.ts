import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {PokemonListService} from '../pokemon-list.service';
import {Pokeinfos} from '../pokeinfos';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule],
  template: `<p>details works!</p>`,
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  pokemonService = inject(PokemonListService);
  pokemoninfos: Pokeinfos | undefined;
  constructor() {
    const pokemonId = Number(this.route.snapshot.params['id']);
    this.pokemoninfos = this.pokemonService.getPokemonById(pokemonId);
  }
}
