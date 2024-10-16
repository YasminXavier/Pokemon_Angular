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
  <body class="screem">
    <div class="part1">
      <section>
        <img  [src]="berriesList?.pic" alt="monstre"/>
      </section>
      <section class="informations">
        <section class="catalog">
          <p><strong> Giftype:</strong> {{berriesList?.giftype}}</p>
          <p><strong> Tasty:</strong> {{berriesList?.tasty}}</p>
          <p><strong> Rarity:</strong> {{berriesList?.rarity}}</p>
        </section>
      <section class="title">
        <h3 > <strong>{{berriesList?.name}} </strong></h3>
      </section>
        <p> {{berriesList?.description}}</p>
        <p><strong> Effect: </strong>{{berriesList?.effect}}</p>
        <section>
          <p> Planting information </p>
      <ul>
        <li> <strong>Duration:</strong> {{berriesList?.duration}} Hrs </li>
        <li *ngFor="let berryPlanting of berriesList?.planting"> <strong>Maturation:</strong> {{berryPlanting?.maturation}} Hrs</li>
        <li *ngFor="let berryPlanting of berriesList?.planting"> <strong>rot:</strong> {{berryPlanting?.rot}} Hrs</li>
      </ul>
    </section>
      </section>
    </div>
</body>
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
