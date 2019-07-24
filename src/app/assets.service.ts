import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Menu {
  items: MenuItem[] =
    [{ name: "Imports", ico: "vertical_align_top", activate: true },
      { name: "ID matching", ico: "view_module", activate: false },
      { name: "Download", ico: "view_module", activate: false }];
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
  Folder1: folderInfo = new folderInfo(1);
  Folder2: folderInfo = new folderInfo(2);
  SelectedPeople: SelectedPeople = new SelectedPeople();
  SamesID: SamePerson[] = [];
  
}

export class displayedPeople {
  folderInfos: folderInfo;
  constructor(folderInfos: folderInfo) {
    this.folderInfos = folderInfos;
  }
  getArrayPersonToDisplay(): Person[]{
    return this.DisplayNewPerson();
  }
  DisplayNewPerson(): Person[] {
    var tabArray = [];
    var personInFolder;
    personInFolder = this.folderInfos.People;
    for (var person of personInFolder) {
      if (tabArray.length == 6) {
        return tabArray;
      }
      else {
        if (!person.used) {
          tabArray.push(person);
        }
      }
    }
    return tabArray;
  }
}
export class folderInfo {
  json: any;
  frames: Frame[] = [];
  People: Person[] = [];
  folder: number;
  peopleToDisplay: displayedPeople = new displayedPeople(this);

  constructor(num: number) {
    this.folder = num;
  }
  private numAction: number = 0;

  setJson(json: any) {
    this.numAction++;
    this.json = json;
    if (this.numAction == 2) {
      this.People = this.exportPeopleArray();
    }
  }
  setFrames(files: File[]) {
    this.numAction++;
    this.frames = this.exportFrame(files);
    if (this.numAction == 2) {
      this.People = this.exportPeopleArray();
    }
  }

  exportPeopleArray(): Person[] {
    var People = [];
    for (var frame in this.json) {
      for (var annotation in this.json[frame].annotations) {
        if (this.json[frame].annotations[annotation].length != 0) {
          var person = new Person(this.json[frame].annotations[annotation].id,this.folder);
          if (!person.IsAlreadyInArray(People)) {
            person.AddAnnotation(this.json[frame].annotations[annotation]);
            person.frames.push(this.findFrameWithName(frame));
            People.push(person);
          }
          else {
            var rightperson = this.findPersonwithId(person.id,People);
            People[rightperson].AddAnnotation(this.json[frame].annotations[annotation]);
            People[rightperson].frames.push(this.findFrameWithName(frame));
          }          
        }
      }
    }
    for (var person1 of People) {
      person1.checkIfReal();
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
  id: number
  annotations: any = [];
  frames: Frame[] = [];
  used: boolean;
  folder: number;
  MaxDim: number = 0;
  biggerFrameToDisplay: number = 0;

  constructor(id: number, num: number) {
    this.id = id;
    this.folder = num;
  }

  AddAnnotation(anno: any) {
    if (anno.width * anno.height > this.MaxDim) {
      this.MaxDim = anno.width * anno.height;
      this.biggerFrameToDisplay = this.annotations.length;
    }
    this.annotations.push(anno);
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

  SetIsAClient() {
    var itIsNotAClient = false;
    if (this.annotations[0].y > 357) {
      itIsNotAClient = true;
    }
    this.used = itIsNotAClient;
  }


  checkIfReal() {
    this.SetIsAClient();
    if (this.MaxDim < 16000) {
      this.used = true;
    }

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
export class SamePerson {
  People: Person[] = [];
  constructor(selectedPeople: SelectedPeople, as: AssetsService) {
    for (var i of selectedPeople.Folder1) {
      this.People.push(i);
    }
    for (var i of selectedPeople.Folder2) {
      this.People.push(i);
    }
    for (var i of selectedPeople.BottomBar) {
      var ArrayOfExistantPerson;
      for (var y of as.SamesID) {
        if (i == y.Get()[0]) {
          ArrayOfExistantPerson = y.Get();
          as.SamesID = this.arrayRemove(as.SamesID, y);
        }
      }
      for (var t of ArrayOfExistantPerson) {
        this.People.push(t);
      }
    }
  }

  private arrayRemove(arr, value): any {

    return arr.filter(function (ele) {
      return ele != value;
    });

  }
  Get(): Person[] {
    return this.People;
  }

}
export class SelectedPeople {
  constructor() { }
  Folder1: Person[] = [];
  Folder2: Person[] = [];
  BottomBar: Person[] = [];

  Reset() {
    this.Folder1 = [];
    this.Folder2 = [];
    this.BottomBar = [];
  }


}

