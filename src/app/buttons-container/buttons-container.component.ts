import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AssetsService, SamePerson } from '../assets.service';

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


  NotAPerson() {
    if (this.assets.SelectedPeople.Folder1.length + this.assets.SelectedPeople.Folder2.length + this.assets.SelectedPeople.BottomBar.length < 1) {
      alert("Please select at least 1 person!")
    }
    else {
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

}
