import { Component, OnInit } from '@angular/core';
import { AssetsService, SamePerson } from '../assets.service';
import { numberItem } from '../card-import/card-import.component';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(private assets: AssetsService) { }

  ngOnInit() {
  }

  getJsonFolder(numFolder: number) {
    this.setJson(this.setNewIdOfperson());
    if (numFolder == 1) {      
      var sJson = JSON.stringify(this.assets.Folder1.json);
      console.log(sJson);
      var element = document.createElement('a');
      element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
      element.setAttribute('download', "IDDiffrentJSON1.json");
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click(); // simulate click
      document.body.removeChild(element);

    } else {
      var sJson = JSON.stringify(this.assets.Folder2.json);
      console.log(sJson);
      var element = document.createElement('a');
      element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
      element.setAttribute('download', "IDDiffrentJSON2.json");
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click(); // simulate click
      document.body.removeChild(element);
    }
  }

  setJson(correspondingID: any[]) {
    for (let i of correspondingID) {
      if (i.folder == 1) {
        var json = this.assets.Folder1.json;
      } else {
        var json = this.assets.Folder2.json;
      }
      for (var j in i.frames) {
        var frame = i.frames[j].name;
        for (var anno in json[frame].annotations) {
          if (json[frame].annotations[anno].id == i.oldId) {
            json[frame].annotations[anno].id = i.newId;
          }
        }
      }
    }
  }

  setNewIdOfperson(): any {
    var update_id = this.MaxId(this.assets.Folder1.json, this.assets.Folder2.json);
    var correspondingID = [];
    var i = 0;
    console.log(this.assets.SamesID)
    for (let samePeople of this.assets.SamesID) { //pour chaque tableau de personnes qui sont les mêmes
      for (let person of samePeople.People) { //pour chaque personne de ce tableau
        correspondingID[i] = { "frames": person.frames ,"oldId":person.id ,"newId": update_id , "folder":person.folder }; //l'id est mis au max+10 des ids déjà existant
        i++;
      }
      update_id++; //id prochain +1
    }
    console.log(correspondingID);
    return correspondingID;
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
    
    return maxId + 10;
  }
}
