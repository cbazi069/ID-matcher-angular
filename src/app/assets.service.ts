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
  frames1: Frame[];
  frames2: Frame[];
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
            People.push(person)
          }
        }
      }
    }
    return People
    
  }
  exportFrame(files: File[]): Frame[] {
    var array = [];
    for (var i = 0; i > files.length; i++) {
      array.push(new Frame(files[i], i));
    }
    return array;
  }
  findFrameWithName(name: string, array: Frame[]): Frame {
    for (var i of array) {
      if (i.name == name) {
        return i;
      }
    }
  }
}
export class Person {
  annotation: any;
  isARealPerson: boolean = true;
  frame: Frame;

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
export class Frame {
  name: string;
  index: number;
  file: File;
  constructor(file: File, index: number) {
 
    this.index = index;
    this.file = file;
    this.name = this.file.name;
  }
}

