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
export class AssetsService {
  Folder1: folderInfo = new folderInfo();
  Folder2: folderInfo = new folderInfo();
}

class folderInfo {
  json: any;
  frames: Frame[] = [];
  People: Person[] = [];

  private numAction: number = 0;

  setJson(json: any) {
    this.numAction++;
    this.json = json;
    if (this.numAction == 2) {
      this.People = this.exportPeopleArray()
      console.log(this.People)
    }
  }
  setFrames(files: File[]) {
    this.numAction++;
    this.frames = this.exportFrame(files);
    if (this.numAction == 2) {
      this.People = this.exportPeopleArray()
      console.log(this.People)
    }
  }

  exportPeopleArray(): Person[] {
    var People = [];
    for (var frame in this.json) {
      for (var annotation in this.json[frame].annotations) {
        if (this.json[frame].annotations[annotation].length != 0) {
          var person = new Person(this.json[frame].annotations[annotation].id);
          if (!person.IsAlreadyInArray(People)) {
            person.annotations.push(this.json[frame].annotations[annotation])
            person.frames.push(this.findFrameWithName(frame))
            People.push(person)
          }
          else {
            var rightperson = this.findPersonwithId(person.id,People);
            People[rightperson].annotations.push(this.json[frame].annotations[annotation])
            People[rightperson].frames.push(this.findFrameWithName(frame))
          }

        }
      }
    }
    return People

  }
  exportFrame(files: File[]): Frame[] {
    var array = [];
    for (var i = 0; i < files.length; i++) {
      array.push(new Frame(files[i], i));
    }
    return array;
  }

  //////////////////////////searching method/////////////////
  findFrameWithName(name: string): Frame {
    for (var i of this.frames) {
      if (i.name == name) {
        return i;
      }
    }
  }
  findFrameWithIndex(index: number): Frame {
    for (var i of this.frames) {
      if (i.index == index) {
        return i;
      }
    }
  }
  findPersonwithId(id: number, people: Person[]): number {
    for (var i = 0; i < people.length;i++) {
      if (people[i].id == id) {
        return i;
      }
    }
  }
}



export class Person {
  id : number
  annotations: any = [];
  frames: Frame[] = [];

  constructor(id: number) {
    this.id = id;
  }

  IsAlreadyInArray(People: Person[]): boolean {
    var isIn = false;
    for (let i of People) {
      if (i.id == this.id) {
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

