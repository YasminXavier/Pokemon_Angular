import { Component, inject, Input } from '@angular/core';
import { Berries } from '../../berries';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonListService } from '../../pokemon-list.service';

@Component({
  selector: 'app-berryinfos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <body class="body">
      <section class="product" >
        <section class="image">
          <img  [src]="berriesList.pic" alt="monstre"/>
        </section>
        <h4><strong> {{berriesList.name}} </strong></h4>
        <div class="infos">
          <p class="price"> {{berriesList.giftype}}</p>
        </div>
        <a [routerLink]="['/berries', berriesList.id]">Learn More > </a>
      </section>
    </body>
  `,
  styleUrl: './berryinfos.component.css'
})
export class BerryinfosComponent {
  @Input()
  berriesList!: Berries;
}
