import { Component, OnInit, Input } from '@angular/core';
import { AssetsService } from '../assets.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() infosfromthecard: CardInfo;

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
    if (this.infosfromthecard.folderindication == 1) {
      if (this.infos.Folder1.People[0].frames[0].file) {
        var reader = new FileReader();

        reader.readAsDataURL(this.infos.Folder1.People[0].frames[0].file); // read file as data url

        reader.onload = (event) => { // called once readAsDataURL is completed
          this.url = event.target["result"];
        }
      }
    }
    if (this.infosfromthecard.folderindication == 2) {
      if (this.infos.Folder2.People[0].frames[0].file) {
        var reader = new FileReader();

        reader.readAsDataURL(this.infos.Folder1.People[0].frames[0].file); // read file as data url

        reader.onload = (event) => { // called once readAsDataURL is completed
          this.url = event.target["result"];
        }
      }
    }
  }

}
export class CardInfo {
  title: string;
  legend: string;
  folderindication: number;
}
