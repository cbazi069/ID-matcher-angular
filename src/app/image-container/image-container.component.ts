import { Component, OnInit } from '@angular/core';
import { FoldersInfo } from '../assets.service';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent implements OnInit {

  constructor(private infos: FoldersInfo) { }

  ngOnInit() {
    console.log(this.infos);
  }

}
