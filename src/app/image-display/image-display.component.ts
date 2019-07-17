import { Component, OnInit, Input } from '@angular/core';
import { AssetsService, Person } from '../assets.service';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {
  @Input() personToDisplay: Person;
  myStyle: any;
  url = '';
  
  constructor() {
  }

  ngOnInit() {
    var reader = new FileReader();
    reader.readAsDataURL(this.personToDisplay.frames[20].file); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
    this.url = event.target["result"];
    }
    //this.CropingXYtoPixels();
  }

  CropingXYtoPixels() {
    var annotation = this.personToDisplay.annotations[20];
    var image_height = 480;
    var image_width = 640;
    var height = annotation.height;
    var width = annotation.width;
    var x = annotation.x;
    var y = annotation.y;
    var leftcrop = -x;
    var rightcrop = -(image_width - x - width);
    var bottomcrop = -(image_height - y - height);
    var topcrop = -y
    this.myStyle = {
      "margin-top": topcrop.toString() + "px",
      "margin-left": leftcrop.toString() + "px",
      "margin-right": rightcrop.toString() + "px",
      "margin-bottom": bottomcrop.toString() + "px"
    }
  }
}
