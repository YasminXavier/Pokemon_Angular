import {Routes} from '@angular/router';
import {PokesComponent} from './pokes/pokes.component';

const routeConfig: Routes = [
    {
      path: '',
      component: PokesComponent,
      title: 'Home page',
    },
  ];
  export default routeConfig;