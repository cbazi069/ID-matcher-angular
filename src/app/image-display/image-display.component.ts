import { Component, OnInit, Input } from '@angular/core';
import { AssetsService, Person } from '../assets.service';
import { CardInfo } from '../card/card.component';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {
  @Input() infoCard: CardInfo;
  @Input() numToDisplay: number;
  personToDisplay: Person = this.infoCard.personToDisplay[this.numToDisplay];
  myStyle: any = {};
  url = '';
  selected = false;
  IndexToDisplay = 0;

  constructor(private assets: AssetsService) {
  }

  ngOnInit() {
    this.printImage();
  }

  CropingXYtoPixels() {
    var annotation = this.personToDisplay.annotations[this.IndexToDisplay];
    var height = annotation.height;
    var width = annotation.width;
    var x = -annotation.x;
    var y = -annotation.y;
    this.myStyle = {
      "object-fit": "none",
      "object-position": x.toString() + "px " + y.toString() + "px",
      "width": width.toString() + "px",
      "height": height.toString() + "px",
    }
  }
  TogglePerson(): void {
    this.selected = !this.selected;
    if (this.selected) {
      this.addToSelectedPeople();
    }
    else {
      this.removeFromSelectedPeople();
    }
  }

  addToSelectedPeople() {
    if (this.personToDisplay.folder == 1) {
      this.assets.Folder1.selectedPeople.push(this.personToDisplay);
    }
    if (this.personToDisplay.folder == 2) {
      this.assets.Folder2.selectedPeople.push(this.personToDisplay);
    }
  }

  removeFromSelectedPeople() {
    if (this.personToDisplay.folder == 1) {
      this.assets.Folder1.selectedPeople = this.arrayRemove(this.assets.Folder1.selectedPeople, this.personToDisplay);
    }
    if (this.personToDisplay.folder == 2) {
      this.assets.Folder2.selectedPeople = this.arrayRemove(this.assets.Folder2.selectedPeople,this.personToDisplay);
    }
  }

  arrayRemove(arr, value):any {

  return arr.filter(function (ele) {
    return ele != value;
  });

}
  mouseWheelUpFunc() {
    if (this.IndexToDisplay + 10 < this.personToDisplay.annotations.length) {
      this.IndexToDisplay+=10;      
      this.printImage();
    }
  }
  mouseWheelDownFunc() {
    if (this.IndexToDisplay - 10 >= 0) {
      this.IndexToDisplay-=10;
      this.printImage();
    }
  }
  printImage() {
    var reader = new FileReader();
    reader.readAsDataURL(this.personToDisplay.frames[this.IndexToDisplay].file); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = event.target["result"];
    }
    this.CropingXYtoPixels();
  }
}
