import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AssetsService, Person, SamePerson } from '../assets.service';

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrls: ['./buttons-container.component.css']
})
export class ButtonsContainerComponent implements OnInit {

  @Output() BtnMergeClicked : EventEmitter<any> = new EventEmitter();

  constructor(private assets: AssetsService) { }

  mergeFunction() {

    if (this.assets.Folder1.selectedPeople.length == 0 || this.assets.Folder2.selectedPeople.length == 0) {
      alert("Please select some people!")
    } else {
      var objectSM = new SamePerson(this.assets.Folder1.selectedPeople, this.assets.Folder2.selectedPeople);
      this.assets.SamesID.push(objectSM);
      for (var person1 of this.assets.Folder1.selectedPeople) {
        person1.used = true;
      }
      for (var person2 of this.assets.Folder2.selectedPeople) {
        person2.used = true;
      }
      this.BtnMergeClicked.emit(null);
    }
    console.log(this.assets.SamesID);
  }
  ngOnInit() {
  }

}
