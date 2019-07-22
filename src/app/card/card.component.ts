import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AssetsService, folderInfo } from '../assets.service';
import { ImageDisplayComponent } from '../image-display/image-display.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() infosfromthecard: CardInfo;
  @Input() folder_num: folderInfo;

  @ViewChild('im1', { static: false }) im1: ImageDisplayComponent;
  @ViewChild('im2', { static: false }) im2: ImageDisplayComponent;
  @ViewChild('im3', { static: false }) im3: ImageDisplayComponent;
  @ViewChild('im4', { static: false }) im4: ImageDisplayComponent;
  @ViewChild('im5', { static: false }) im5: ImageDisplayComponent;
  @ViewChild('im6', { static: false }) im6: ImageDisplayComponent;

  constructor(private infos: AssetsService) {
  }
  ngOnInit() {
    this.folder_num.peopleToDisplay.getArrayPersonToDisplay()
  }
  Refresh() {
    console.log("R for " + this.folder_num.folder.toString());
    var people = this.folder_num.peopleToDisplay.getArrayPersonToDisplay()
    this.im1.refresh(people[0]);
    this.im2.refresh(people[1]);
    this.im3.refresh(people[2]);
    this.im4.refresh(people[3]);
    this.im5.refresh(people[4]);
    this.im6.refresh(people[5]);

  }

  AddToSelection(event) {
    if (this.folder_num.folder == 1) {
      this.infos.Folder1.selectedPeople.push(event);
    }
    else if (this.folder_num.folder == 2) {
      this.infos.Folder2.selectedPeople.push(event);
    }
    else {
      console.log("nothing happend")
    }

  }

  RemoveFromSelection(event) {
    if (this.folder_num.folder == 1) {      
      this.infos.Folder1.selectedPeople = this.arrayRemove(this.infos.Folder1.selectedPeople, event);
    }
    else if (this.folder_num.folder == 2) {
      this.infos.Folder2.selectedPeople = this.arrayRemove(this.infos.Folder2.selectedPeople, event);
    }
  }

  arrayRemove(arr, value): any {

    return arr.filter(function (ele) {
      return ele != value;
    });

  }
}
export class CardInfo {
  title: string;
  legend: string;

  constructor(title: string, legend: string) {
    this.title = title;
    this.legend = legend;
  }
}

