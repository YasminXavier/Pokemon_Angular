import { Injectable } from '@angular/core';
import { Pokeinfos } from './pokeinfos';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  url= 'http://localhost:3000/pokemons';
 
  async getAllPokemons(): Promise<Pokeinfos[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getPokemonById(id: number): Promise<Pokeinfos | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

}
