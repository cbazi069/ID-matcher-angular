import { Component, OnInit, Input } from '@angular/core';
import { MenuItem, Menu } from "../assets.service"

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private menu: Menu) {
  }

  onSelect(item_selected: MenuItem): void {
    for (let item of this.menu.items) {
      item.activate = false;
    }
    item_selected.activate = true;
    this.menu.selectedItem = item_selected;
  }

  ngOnInit() {
  }

}
