import { Component, OnInit } from '@angular/core';
import {TimelineService} from "../timeline.service";
import {CardService} from "../card.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
// la liste pour le time line id=1, il faut faire por tous les timeslines
  cardList =this.cardService.getCardList(1);

  constructor(private cardService : CardService) { }


  ngOnInit(): void {
  }

  saveTimeline() {
    /*let divContenu = document.getElementById("EditionNouvelleCarte");

    if(getComputedStyle(divContenu).display != "none"){
      divContenu.style.display = "none";
    } else {
      divContenu.style.display = "block";
    }*/
  }

  newCard() {

  }

  saveCard() {

  }

  // editer dans le tableau  la liste de cartes
  updateCard(card : any) {

  }

// editer dans le tableau  la liste de cartes
  deleteCard(card : any) {

  }
}
