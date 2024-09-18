import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,],
  template: `
    <main>
      <header>
        <div class="search">
          <img class="logo" src="/assets/pokeshop.png"/>
          <input type="text" placeholder="Search product"/>
          <button class="primary" type="button"> Search</button>
        </div>
        <div>
          <ul>
            <li> Pokemons </li>
            <li> Locations </li>
            <li> Berries </li>
            <li> Itens </li>
          </ul>
        </div>
      </header>
      <section class="content">
      </section>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pokemon_Angular';
}
