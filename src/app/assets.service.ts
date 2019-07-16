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

@Injectable({
  providedIn: 'root'
})
export class FoldersInfo {
  JSON1 : any;
  JSON2: any;
  images1: File[];
  images2: File[];
  People1: Person[];
  People2: Person[];
}
@Injectable({
  providedIn: 'root'
})
export class Algo {
  exportPeopleArray(Json: any): Person[] {
    var People = [];
    for (var frame in Json) {
      for (var annotation in Json[frame].annotations) {
        if (Json[frame].annotations[annotation].length != 0) {
          var person = new Person(Json[frame].annotations[annotation]);
          if (!person.IsAlreadyInArray(People)) {
            person.frameName = frame;
            People.push(person)
          }
        }
      }
    }
    return People
  }
}
export class Person {
  annotation: any;
  isARealPerson: boolean = true;
  frameName: string;
  frameNumber: number;

  constructor(annotation: any) {
    this.annotation = annotation;
  }

  IsAlreadyInArray(People: Person[]): boolean {
    var isIn = false;
    for (let i of People) {
      if (i.annotation.id == this.annotation.id) {
        isIn = true;
      }
    }
    return isIn;
  }
}

