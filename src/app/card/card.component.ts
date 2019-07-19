import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AssetsService } from '../assets.service';
import { ImageDisplayComponent } from '../image-display/image-display.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() infosfromthecard: CardInfo;
  @Input() folder_num: number;
  @ViewChild('im1', { static: false }) im1: ImageDisplayComponent;
  @ViewChild('im2', { static: false }) im2: ImageDisplayComponent;
  @ViewChild('im3', { static: false }) im3: ImageDisplayComponent;
  @ViewChild('im4', { static: false }) im4: ImageDisplayComponent;
  @ViewChild('im5', { static: false }) im5: ImageDisplayComponent;
  @ViewChild('im6', { static: false }) im6: ImageDisplayComponent;

  foldernum: number

  constructor(private infos: AssetsService) { }
  ngOnInit() {
    this.foldernum = this.folder_num;
  }

  Refresh() {
    this.im1.refresh();
    this.im2.refresh();
    this.im3.refresh();
    this.im4.refresh();
    this.im5.refresh();
    this.im6.refresh();
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

