import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../assets.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-folder2-image-contenant',
  templateUrl: './folder2-image-contenant.component.html',
  styleUrls: ['./folder2-image-contenant.component.css']
})
export class Folder2ImageContenantComponent implements OnInit {
  constructor(private infos: AssetsService) { }
  url = '';
  imageChangedEvent: any = '';
  croppedImage: any = '';
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
  ngOnInit() {
    if (this.infos.Folder1.People[0].frames[0].file) {
      var reader = new FileReader();

      reader.readAsDataURL(this.infos.Folder1.People[0].frames[0].file); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target["result"];
      }
    }
  }

}
