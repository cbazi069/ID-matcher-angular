import { Component, OnInit, ViewChild, Directive } from '@angular/core';
import { CardInfo, CardComponent } from '../card/card.component';
import { Menu, AssetsService } from '../assets.service';

@Component({
  selector: 'app-contenant-image',
  templateUrl: './contenant-image.component.html',
  styleUrls: ['./contenant-image.component.css']
})
export class ContenantImageComponent implements OnInit {
  info1: CardInfo = new CardInfo("Images on the first JSON file", "Choose images were you can see that people are the same and go to the right cell");
  info2: CardInfo = new CardInfo("Images on the second JSON file", "Choose images were you can see that people are the same and choose the action with the button bellow.");
  @ViewChild('card1', { static: false }) card1: CardComponent;
  @ViewChild('card2', { static: false }) card2: CardComponent; 

  constructor(private menu: Menu, private assets: AssetsService) { }

  ngOnInit() {
  }

  RefreshImageDisplay() {
    this.card1.Refresh();
    this.card2.Refresh();
  }

}
