import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Menu {
  items: MenuItem[] =
    [{ name: "Imports", ico: "vertical_align_top", activate: true },
    { name: "ID matching", ico: "view_module", activate: false }];
  selectedItem: MenuItem = this.items[0];

}

export class MenuItem {
  name: string;
  ico: string;
  activate: boolean;
}

