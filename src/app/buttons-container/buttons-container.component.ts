import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AssetsService, Person, SamePerson } from '../assets.service';

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrls: ['./buttons-container.component.css']
})
export class ButtonsContainerComponent implements OnInit {

  @Output() BtnMergeClicked: EventEmitter<any> = new EventEmitter();
  
  constructor(private assets: AssetsService) { }

  mergeFunction() {
    if (this.assets.SelectedPeople.Folder1.length + this.assets.SelectedPeople.Folder2.length + this.assets.SelectedPeople.BottomBar.length < 2) {
      alert("Please select at least 2 people!")
    }
    else {
      var objectSM = new SamePerson(this.assets.SelectedPeople, this.assets);
      this.assets.SamesID.push(objectSM);
      for (var person1 of this.assets.SelectedPeople.Folder1) {
        person1.used = true;
      }
      for (var person2 of this.assets.SelectedPeople.Folder2) {
        person2.used = true;
      }

      this.assets.SelectedPeople.Reset();

      this.BtnMergeClicked.emit(null);
    }
  }
  ngOnInit() {
  }

  DowloadJson() {
    
    var json1 = this.assets.Folder1.json;
    var json2 = this.assets.Folder2.json;
    var startId = this.MaxId(json1, json2);
    this.setNewIdOfperson(startId, json1, json2);
    var exportObjList = {"json1": json1, "json2": json2};
    var exportNameList = { "a": "json_folder_1", "b": "json_folder_2"};
    for (var i = 0; i < 1; i++) {
      if (i = 0) {
        var exportObj = exportObjList.json1;
        var exportName = exportNameList.a;
      }
      if (i = 1) {
        var exportObj = exportObjList.json2;
        var exportName = exportNameList.b;
      }
      var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
      var downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", exportName + ".json");
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    }
    

  }

  setJsonWithNewIds(person: Person,old_id: number, folder: number, new_id: number) {
    if (folder == 1) {
      for (var frame in person.frames) {
        for (var anno in this.assets.Folder1.json[frame].annotations) {
          if (old_id == this.assets.Folder1.json[frame].annotations[anno].id) {
            this.assets.Folder1.json[frame].annotations[anno].id = new_id;
          }
        }
      }
    } else {
      for (var frame in person.frames) {
        for (var anno in this.assets.Folder2.json[frame].annotations) {
          if (old_id == this.assets.Folder2.json[frame].annotations[anno].id) {
            this.assets.Folder2.json[frame].annotations[anno].id = new_id;
          }
        }
      }
    }
  }

  setNewIdOfperson(start_id: number, json1: any, json2: any) {
    var update_id = start_id;
    var oldID_1 = 0;
    var oldID_2 = 0;
    for (let samePerson of this.assets.SamesID) {
      //for (let peopleFrom1 of samePerson.PeopleFromFolder1) {
      //  oldID_1 = peopleFrom1.id;
      //  this.setJsonWithNewIds(peopleFrom1, oldID_1, 1, update_id);
      //}
      //for (let peopleFrom2 of samePerson.PeopleFromFolder2) {
      //  oldID_2 = peopleFrom2.id;
      //  this.setJsonWithNewIds(peopleFrom2, oldID_2, 2, update_id);
      //}
      update_id++;
    }
  }

  MaxId(json1: any, json2: any): number{
    var maxId = 0;
    for (var frame in json1) {
      for (var anno in json1[frame].annotations) {
        if (json1[frame].annotations[anno].hasOwnProperty("id")) {
          if (maxId < json1[frame].annotations[anno].id) {
            maxId = json1[frame].annotations[anno].id;
          }
        }
      }
    }
    for (var frame in json2) {
      for (var anno in json2[frame].annotations) {
        if (json2[frame].annotations[anno].hasOwnProperty("id")) {
          if (maxId < json2[frame].annotations[anno].id) {
            maxId = json2[frame].annotations[anno].id;
          }
        }
      }
    }
    return maxId+10;
  }

}
