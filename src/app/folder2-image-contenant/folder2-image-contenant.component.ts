import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../assets.service';

@Component({
  selector: 'app-folder2-image-contenant',
  templateUrl: './folder2-image-contenant.component.html',
  styleUrls: ['./folder2-image-contenant.component.css']
})
export class Folder2ImageContenantComponent implements OnInit {
  constructor(private infos: AssetsService) { }
  url = '';
  ngOnInit() {
   /* if (this.infos.images2 && this.infos.images2[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(this.infos.images2[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target["result"];
      }
    }*/
  }

}
