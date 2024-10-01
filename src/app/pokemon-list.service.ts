import { Injectable } from '@angular/core';
import { Pokeinfos } from './pokeinfos';
import { Ability } from './abilities';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  urlpokemons= 'http://localhost:3000/pokemons';

 
  async getAllPokemons(): Promise<Pokeinfos[]> {
    const data = await fetch(this.urlpokemons);
    return (await data.json()) ?? [];
  }

  async getPokemonById(id: number): Promise<Pokeinfos | undefined> {
    const data = await fetch(`${this.urlpokemons}/${id}`);
    return (await data.json()) ?? {};
  }


  urlabil= 'http://localhost:3000/abilities';

  async getAllAbilities(): Promise<Ability[]> {
    const data = await fetch(this.urlabil);
    return (await data.json()) ?? [];
  }
  async getAbilitieById(id: number): Promise<Ability | undefined> {
    const data = await fetch(`${this.urlabil}/${id}`);
    return (await data.json()) ?? {};
  }


}
