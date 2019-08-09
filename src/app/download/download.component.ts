import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../assets.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(private assets: AssetsService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.setJson(this.setNewIdOfperson());
  }
  downloadJsonHref1: SafeUrl;
  downloadJsonHref2: SafeUrl;

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
    for (let samePeople of this.assets.SamesID) { //pour chaque tableau de personnes qui sont les mêmes
      for (let person of samePeople.People) { //pour chaque personne de ce tableau
        correspondingID[i] = { "frames": person.frames ,"oldId":person.id ,"newId": update_id , "folder":person.folder }; //l'id est mis au max+10 des ids déjà existant
        i++;
      }
      update_id++; //id prochain +1
    }
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


  generateDownloadJsonUri1() {
    var csvData = JSON.stringify(this.assets.Folder1.json);
    var blob = new Blob([csvData], {
      type: "application/csv;charset=utf-8;"
    });

    if (window.navigator.msSaveBlob) {
      // FOR IE BROWSER
      navigator.msSaveBlob(blob, "AnnotationFolder1_ReIdentified.json");
    } else {
      // FOR OTHER BROWSERS
      var link = document.createElement("a");
      var csvUrl = URL.createObjectURL(blob);
      link.href = csvUrl;
      link.download = "AnnotationFolder1_ReIdentified.json";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
  generateDownloadJsonUri2() {
    var csvData = JSON.stringify(this.assets.Folder2.json);
    var blob = new Blob([csvData], {
      type: "application/csv;charset=utf-8;"
    });

    if (window.navigator.msSaveBlob) {
      // FOR IE BROWSER
      navigator.msSaveBlob(blob, "AnnotationFolder2_ReIdentified.json");
    } else {
      // FOR OTHER BROWSERS
      var link = document.createElement("a");
      var csvUrl = URL.createObjectURL(blob);
      link.href = csvUrl;
      link.download = "AnnotationFolder2_ReIdentified.json";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

}
