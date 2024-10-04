
/* This file is where we will define the routes in the application.
Routing is the ability to navigate from one component in the 
application to another. */

import {Routes} from '@angular/router';
import {HomeComponent} from './pokemons/home/home.component';
import { PokemonDetailsComponent } from './pokemons/pokemon-details/pokemon-details.component';
import { BerryinfosComponent } from './berries/berryinfos/berryinfos.component';
import { BerryDetailsComponent } from './berries/berry-details/berry-details.component';
import { HomeBerryComponent } from './berries/home-berry/home-berry.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Pokemons',
    },
    {
      path: 'details/:id'
      /* In this case, :id is dynamic and will change based on how
      the route is requested by the code. */,
      component: PokemonDetailsComponent,
      title: ':name',
    },
    {
      path: 'abilities/:id',
      component: PokemonDetailsComponent
    },
    {
      path: 'berries',
      component: HomeBerryComponent,
      title: 'Berries'
    },
    {
      path: 'berries/:id',
      component: BerryDetailsComponent,
      title: ':name'
    }
  ];
  export default routeConfig;
