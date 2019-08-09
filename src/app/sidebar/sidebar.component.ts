import { Component, OnInit, Input } from '@angular/core';
import { MenuItem, Menu } from "../assets.service";
import { AssetsService } from '../assets.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private menu: Menu, private asset: AssetsService) {
  }

  onSelect(item_selected: MenuItem): void {
    if (this.asset.Folder1.People.length != 0 && this.asset.Folder2.People.length != 0) {
      for (let item of this.menu.items) {
        item.activate = false;
      }
      item_selected.activate = true;
      this.menu.selectedItem = item_selected;
    }
    else {
      alert("No files imported");
    }
  }

  ngOnInit() {
  }

}
