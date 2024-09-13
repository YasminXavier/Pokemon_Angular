import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main>
      <header>
        <div class="header">
          <link type="image/png" href="./pokeshop.pngpok">
          <input type="text" placeholder="Search product"/>
          <button class="primary" type="button"> Search</button>
        </div>
      </header>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pokemon_Angular';
}
