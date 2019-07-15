import { Component } from '@angular/core';
import { Menu } from './assets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private menu: Menu) {

  }

}
