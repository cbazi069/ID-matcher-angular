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
    this.personToDisplay = person;
    this.selected = false;
    this.IndexToDisplay = this.personToDisplay.biggerFrameToDisplay;
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
    console.log(this.personToDisplay)
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
