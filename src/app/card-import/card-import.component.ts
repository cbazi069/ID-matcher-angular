import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-import',
  templateUrl: './card-import.component.html',
  styleUrls: ['./card-import.component.css']
})
export class CardImportComponent implements OnInit {

  @Input() info: numberItem
  checkJson = "";
  checkFolder = "";

  UploadedJson(event): void {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], "UTF-8");
    fileReader.onload = () => {
      console.log(JSON.parse(fileReader.result.toString()));
      this.checkJson = 'check';
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }


  UploadedImages(event): void {
    this.checkFolder = 'check';
    console.log(event)
  }

  ngOnInit() {
  }
}
export class numberItem {
  num: number;
}
