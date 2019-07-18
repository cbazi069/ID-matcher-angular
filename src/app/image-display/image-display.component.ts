import { Component, OnInit, Input } from '@angular/core';
import { AssetsService, Person } from '../assets.service';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {
  @Input() personToDisplay: Person;
  myStyle: any = {};
  url = '';
  selected = false;
  IndexToDisplay = 0;

  constructor() {
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
