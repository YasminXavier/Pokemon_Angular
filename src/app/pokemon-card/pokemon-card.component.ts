import { Component, Input } from '@angular/core';
import { getPokemonImage, getPokemonNumber, Pokemon } from '../../model/Pokemon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="pokemon-card" *ngIf="pokemon">
  <div class="pokemon-card__image">
    <img
      [src]="getPokemonImage(pokemon)"
      alt="Pokemon Image">
  </div>

  <div class="pokemon-card__number">
    Nº {{ getPokemonNumber(pokemon) }}
  </div>

  <div class="pokemon-card__name">
    {{ pokemon.name }}
  </div>

  <div class="pokemon-card__types">
    <div class="pokemon-card__type"
         *ngFor="let type of pokemon.types"
         [class]="'pokemon-card__type--' + type.toLowerCase()">
      {{ type }}
    </div>
  </div>>
</div>`,
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input()
  public pokemon!: Pokemon;

  public getPokemonImage = getPokemonImage;

  public getPokemonNumber = getPokemonNumber;
}
