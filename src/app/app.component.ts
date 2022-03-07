import { Component } from '@angular/core';
import { HEROES } from '../app/mock-heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of Heros';
  heroes = HEROES;
}
