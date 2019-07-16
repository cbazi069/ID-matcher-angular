import { Component, OnInit, Input } from '@angular/core';
import { AssetsService} from '../assets.service';

@Component({
  selector: 'app-card-import',
  templateUrl: './card-import.component.html',
  styleUrls: ['./card-import.component.css']
})
export class CardImportComponent implements OnInit {

  @Input() info: numberItem
  checkJson = "";
  checkFolder = "";

  constructor(private assets: AssetsService) {
  }


  ///////////////////////////////////Upload JSON//////////////////////////////////
  UploadedJson(event): void {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], "UTF-8");
    fileReader.onload = () => {
      if (this.info.num == 1) {
        this.assets.Folder1.setJson(JSON.parse(fileReader.result.toString()));
      }
      else {
        this.assets.Folder2.setJson(JSON.parse(fileReader.result.toString()));
      }
      this.checkJson = 'check';
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }

///////////////////////////////////Upload Images//////////////////////////////////
  UploadedImages(event): void {
    this.checkFolder = 'check';
    if (this.info.num == 1) {
      this.assets.Folder1.setFrames(event.target.files);
    }
    else {
      this.assets.Folder2.setFrames(event.target.files);
    }
  }

  ngOnInit() {
  }
}
export class numberItem {
  num: number;
}
