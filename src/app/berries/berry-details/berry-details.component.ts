import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonListService } from '../../pokemon-list.service';
import { Berries } from '../../berries';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-berry-details',
  standalone: true,
  imports: [CommonModule],
  template: `
  
  `,
  styleUrl: './berry-details.component.css'
})
export class BerryDetailsComponent {


  pokemonService: PokemonListService = inject(PokemonListService);

  route: ActivatedRoute = inject(ActivatedRoute);
  berriesList: Berries | undefined;

  constructor() {
    const berryId = parseInt(this.route.snapshot.params['id'], 10);
    this.pokemonService.getBerryById(berryId).then((berriesList: any) => {
      this.berriesList = berriesList;
    });
  }

}
