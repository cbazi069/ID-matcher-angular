import { Component, OnInit } from '@angular/core';
import { FoldersInfo } from '../assets.service';

@Component({
  selector: 'app-folder1-image-contenant',
  templateUrl: './folder1-image-contenant.component.html',
  styleUrls: ['./folder1-image-contenant.component.css']
})
export class Folder1ImageContenantComponent implements OnInit {
  constructor(private infos: FoldersInfo) { }
  url = '';
  ngOnInit() {
    if (this.infos.images1 && this.infos.images1[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(this.infos.images1[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target["result"];
      }
    }
  }

}
