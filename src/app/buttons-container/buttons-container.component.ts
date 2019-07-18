import { Component, OnInit } from '@angular/core';
import { AssetsService, Person, SamePerson } from '../assets.service';

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrls: ['./buttons-container.component.css']
})
export class ButtonsContainerComponent implements OnInit {

  constructor(private assets: AssetsService) { }
  mergeFunction() {
    if (this.assets.Folder1.selectedPeople.length == 0 || this.assets.Folder2.selectedPeople.length == 0) {
      alert("Please select some people!")
    } else {
      var objectSM = new SamePerson(this.assets.Folder1.selectedPeople, this.assets.Folder2.selectedPeople);
      this.assets.SamesID.push(objectSM);
    }
    console.log(this.assets.SamesID);
  }
  ngOnInit() {
  }

}
