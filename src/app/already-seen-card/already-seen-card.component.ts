import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../assets.service';

@Component({
  selector: 'app-already-seen-card',
  templateUrl: './already-seen-card.component.html',
  styleUrls: ['./already-seen-card.component.css']
})
export class AlreadySeenCardComponent implements OnInit {

  constructor(private assets: AssetsService) {}

  ngOnInit() {
  }

  AddToSelection(event) {
    this.assets.SelectedPeople.BottomBar.push(event);
  }

  RemoveFromSelection(event) {
    this.assets.SelectedPeople.BottomBar = this.arrayRemove(this.assets.SelectedPeople.BottomBar, event);
  }

  arrayRemove(arr, value): any {

    return arr.filter(function (ele) {
      return ele != value;
    });

  }

}
