import {Routes} from '@angular/router';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

const routeConfig: Routes = [
    {
      path: '',
      component: PokemonCardComponent,
      title: 'Home page',
    },
  ];
  export default routeConfig;