import { Injectable } from '@angular/core';
import {Pokemons} from './pokemons';

@Injectable({
  providedIn: 'root',
})

export class PokemonService{
    url = 'https://pokeapi.co/api/v2/pokemon';

  async getAllPokemon(): Promise<Pokemons[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
      /* The code now uses asynchronous code to make a GET request 
      over HTTP.*/
  }
  async getPokemonById(name:string): Promise<Pokemons | undefined> {
    const data = await fetch(`${this.url}/${name}`);
    return (await data.json()) ?? {};
  }
  /* this functions return either a specific HousingLocation by id 
  or the entire list. */

}