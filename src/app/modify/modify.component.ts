import { Component, OnInit } from '@angular/core';
import {CardService} from "../card.service";

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
cardList =this.cardService.getCardList(1);

  constructor( private cardService: CardService) { }

  ngOnInit(): void {
  }

  updateCard(card : any) {

  }

  deleteCard(card : any) {

  }

  saveCard() {

  }

  newCard() {

  }

  saveTimeline() {

  }
}
