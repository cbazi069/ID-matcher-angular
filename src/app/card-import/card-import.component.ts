import { Component, OnInit, Input } from '@angular/core';
import { FoldersInfo } from '../assets.service';

@Component({
  selector: 'app-card-import',
  templateUrl: './card-import.component.html',
  styleUrls: ['./card-import.component.css']
})
export class CardImportComponent implements OnInit {

  @Input() info: numberItem
  checkJson = "";
  checkFolder = "";

  constructor(private infos: FoldersInfo) {
  }

  UploadedJson(event): void {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], "UTF-8");
    fileReader.onload = () => {
      if (this.info.num == 1) {
        this.infos.JSON1 = JSON.parse(fileReader.result.toString());
      }
      else {
        this.infos.JSON2 = JSON.parse(fileReader.result.toString());
      }
      this.checkJson = 'check';
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }


  UploadedImages(event): void {
    this.checkFolder = 'check';
    if (this.info.num == 1) {
      this.infos.images1 = event.target.files;
    }
    else {
      this.infos.images2 = event.target.files;
    }
  }

  ngOnInit() {
  }
}
export class numberItem {
  num: number;
}
