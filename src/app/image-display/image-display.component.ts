import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AssetsService, Person } from '../assets.service';
import { CardInfo } from '../card/card.component';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {
  @Input() firstImage: Person;
  personToDisplay: Person;

  @Output() AddToSelection: EventEmitter<any> = new EventEmitter();
  @Output() RemoveFromSelection: EventEmitter<any> = new EventEmitter();

  myStyle: any = {};
  url = '';
  selected = false;
  IndexToDisplay:number = 0;

  constructor(private assets: AssetsService) {
  }

  ngOnInit() {
    this.refresh(this.firstImage);
  }

  refresh(person: Person) {
    if (person) {
      this.personToDisplay = person;
      this.selected = false;
      if (this.personToDisplay.biggerFrameToDisplay) {
        this.IndexToDisplay = this.personToDisplay.biggerFrameToDisplay;
      }
      else {
        this.IndexToDisplay = 0;
      }
      this.printImage();
    }
    else {
      this.personToDisplay = null;
    }
  }


  CropingXYtoPixels() {
    var annotation = this.personToDisplay.annotations[this.IndexToDisplay];
    let standard_width = 150;
    let standard_height = 200;
    var height = annotation.height;
    var width = annotation.width;
    var x = -annotation.x;
    var y = -annotation.y;
    this.myStyle = {
      "background-image": "url(" + this.url + ")",
      "background-size": standard_width / width * 640 + "px " + standard_height / height * 480 + "px ",
      "background-repeat": "no-repeat",
      "object-fit": "none",
      "background-position": (x * standard_width / annotation.width) + "px " + (y * standard_height / annotation.height) + "px",
      "width": standard_width + "px",
      "height": standard_height + "px",
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
    this.AddToSelection.emit(this.personToDisplay);
  }

  removeFromSelectedPeople() {
    this.RemoveFromSelection.emit(this.personToDisplay);
  }


  mouseWheelUpFunc(event) {
      this.IndexToDisplay = this.getRndInteger(10, this.personToDisplay.annotations.length);
      this.printImage();
    return false;
  }
  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  printImage() {
    var reader = new FileReader();
    reader.readAsDataURL(this.personToDisplay.frames[this.IndexToDisplay].file); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = event.target["result"];
      this.CropingXYtoPixels();
    }
  }
}
