import { Component, OnInit, Input } from '@angular/core';
import { Menu} from '../assets.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private menu: Menu) {
  }

  ngOnInit() {
  }

}
