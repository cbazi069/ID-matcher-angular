import { Component, OnInit, ViewChild, Directive } from '@angular/core';
import { CardInfo, CardComponent } from '../card/card.component';
import { Menu, AssetsService } from '../assets.service';

@Component({
  selector: 'app-contenant-image',
  templateUrl: './contenant-image.component.html',
  styleUrls: ['./contenant-image.component.css']
})
export class ContenantImageComponent implements OnInit {
  info1: CardInfo = new CardInfo("Images of the first folder you entered", "You can select people by clicking on them. You can select as much people as you want inside the 3 cards (one comming after the first merge) and merge them with the button on the top of the page. If the images are not a person, click on 'not a person' button. Right click give you another point of view from the person you're looking at.");
  info2: CardInfo = new CardInfo("Images on the second folder you entered", "You can select people by clicking on them. You can select as much people as you want inside the 3 cards (one comming after the first merge) and merge them with the button on the top of the page. If the images are not a person, click on 'not a person' button. Right click give you another point of view from the person you're looking at.");
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
