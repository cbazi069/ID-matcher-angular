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

  constructor() {
  }

  ngOnInit() {
    var reader = new FileReader();
    reader.readAsDataURL(this.personToDisplay.frames[40].file); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = event.target["result"];
    }
    this.CropingXYtoPixels();
  }

  CropingXYtoPixels() {
    var annotation = this.personToDisplay.annotations[40];
    var height = annotation.height;
    var width = annotation.width;
    var x = annotation.x;
    var y = annotation.y;
    this.myStyle = {
      "object - fit": "cover",
      "object - position": x.toString()+"px "+y.toString()+"px",
      "width": width.toString() +"px",
      "height": height.toString() +"px",
    }
    console.log(this.myStyle);
  }
}
