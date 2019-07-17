import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../assets.service';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {
  url = '';
  constructor(private assets: AssetsService) { }

  ngOnInit() {
      var reader = new FileReader();

    reader.readAsDataURL(this.assets.Folder1.People[0].frames[20].file); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target["result"];
      }
  }

}
