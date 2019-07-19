import { Component, OnInit, Input } from '@angular/core';
import { AssetsService, folderInfo } from '../assets.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() infosfromthecard: CardInfo;
  @Input() folder_num: number;

  constructor(private infos: AssetsService) { }
  ngOnInit() {
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

