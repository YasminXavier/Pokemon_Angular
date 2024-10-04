import { Component, inject } from '@angular/core';
import { BerryinfosComponent } from "../berryinfos/berryinfos.component";
import { Berries } from '../../berries';
import { PokemonListService } from '../../pokemon-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-berry',
  standalone: true,
  imports: [CommonModule, BerryinfosComponent],
  template: `
  <h3 style="margin: 30px;"> Berries available</h3>
    <section class="productList">
      <app-berryinfos 
        *ngFor="let berriesList of berryInfos"
        [berriesList]="berriesList">

      </app-berryinfos>
    </section>
  `,
  styleUrl: './home-berry.component.css'
})
export class HomeBerryComponent {

  berryInfos: Berries[] = [];

  pokemonService: PokemonListService = inject(PokemonListService);

  constructor(){
    this.pokemonService.getAllBerries().then((berryInfos: Berries[]) => {
      this.berryInfos = berryInfos;
    });
  }


}
