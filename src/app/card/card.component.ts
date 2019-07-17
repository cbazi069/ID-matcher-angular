import { Component, OnInit, Input } from '@angular/core';
import { AssetsService, Person } from '../assets.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() infosfromthecard: CardInfo;

  constructor(private infos: AssetsService) { }
  ngOnInit() {
  }

}
export class CardInfo {
  title: string;
  legend: string;
  folderindication: number;
  personToDisplay: Person[] = [];
  private assets: AssetsService

  constructor(title: string, legend: string, num: number, assets: AssetsService) {
    this.title = title;
    this.legend = legend;
    this.folderindication = num;
    this.assets = assets;
    this.DisplayNewPerson()
  }

  DisplayNewPerson(): void {
    var personInFolder;
    if (this.folderindication == 1) {
      personInFolder = this.assets.Folder1.People;
    }
    else {
      personInFolder = this.assets.Folder2.People;
    }
    for (var person of personInFolder) {
      if (this.personToDisplay.length == 9) {
        return;
      }
      else {
        if (!person.used) {
          this.personToDisplay.push(person);
        }
      }
    }
  }
}
