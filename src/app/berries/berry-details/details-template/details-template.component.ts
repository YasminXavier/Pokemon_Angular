import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Berries } from '../../../berries';
import { PokemonListService } from '../../../pokemon-list.service';

@Component({
  selector: 'app-details-template',
  standalone: true,
  imports: [],
  template: `
   <p> {{berriesList?.description}}</p>
        <p><strong> Effect: </strong>{{berriesList?.effect}}</p>
        <section>
          <p> Planting information </p>
      <ul>
        <li> <strong>Duration:</strong> {{berriesList?.duration}} Hrs </li>
        <li> <strong>Maturation:</strong> {{berryPlanting?.maturation}} Hrs</li>
        <li> <strong>rot:</strong> {{berryPlanting?.rot}} Hrs</li>
      </ul>
    </section>
  `,
  styleUrl: './details-template.component.css'
})
export class DetailsTemplateComponent {

  @Input()
  berriesList!: Berries;
  }

}
