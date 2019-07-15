import { Component, OnInit } from '@angular/core';
import { numberItem } from '../card-import/card-import.component'
import { FoldersInfo } from '../assets.service';
  
@Component({
  selector: 'app-imports',
  templateUrl: './imports.component.html',
  styleUrls: ['./imports.component.css']
})
export class ImportsComponent implements OnInit {
  constructor() { }
  num1: numberItem = { num: 1 }
  num2: numberItem = { num: 2 }
  ngOnInit() {
  }
}
