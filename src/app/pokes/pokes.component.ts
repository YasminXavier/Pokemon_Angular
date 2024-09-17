import { Component, inject } from '@angular/core';
import { PokemonComponent } from '../pokemon-component/pokemon-component.component';
import { PokemonService } from '../pokemons.service';
import { Pokemons } from '../pokemons';

@Component({
  selector: 'app-pokes',
  standalone: true,
  imports: [PokemonComponent],
  template: `
  <section class="results">
      <app-pokemon-component
        *ngFor="let Pokemons of filteredLocationList"
        [pokemonList]="Pokemons"> 
        <!-- Ngfor é uma diretiva Angular que permite percorrer um 
        array, ou qualquer objeto iterável, e exibir cada item do 
        array como elemento na tela. 
        Colocar o ngFor em um elemento HTML, ou componente, cria
        várias cópias desse elemento para cada item do array
        fornecido. 
        *ngFor="let user of users":
          • let user cria uma variável local que disponibiliza o
          valor decada usuário.
          • of users significa que iremos iterar, ou percorrer,
          o array de usuários.
        -->
      </app-pokemon-component>
    </section>
    
    `,
  styleUrl: './pokes.component.css'
})
export class PokesComponent {
  pokeList: Pokemons[] = [];
  PokemonService: PokemonService = inject(PokemonService);
  filteredLocationList: Pokemons[] = [];
  /* The filteredLocationList hold the values that match the 
  search criteria entered by the user.*/

  constructor() {
    this.PokemonService.getAllPokemon().then((pokeList: Pokemons[]) => {
      this.pokeList = pokeList;
      this.filteredLocationList = pokeList;
    });
  }
  /* The constructor is the first function that runs when this 
  component is created. The code in the constructor will assign 
  the pokeList the value returned from the call to 
  getAllPokemonss.*/

}
