import { Injectable } from '@angular/core';
import { Pokeinfos } from './pokeinfos';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {
  pokemoninfos: any;

  getAllPokemons(): Pokeinfos[]{
    return this.pokemoninfos;
  }

  getPokemonById(id: number): Pokeinfos[] | undefined{
    return this.pokemoninfos.find((pokemoninfos: { id: number; }) => pokemoninfos.id === id)
  }

  constructor() { }
}
