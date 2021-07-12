import { Component, OnInit } from '@angular/core';
import {Card} from "../card";
import {CardService} from "../card.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

// variable pour utuliser la fonction mouseOver
  changeText: boolean;

  guessCardDate: number = 0;


  // formulaire avec un forme builder coté type script
  guessForm=this.formBuilder.group({
    formDate:'' // valeur récupérée dans le formulaire
  });

  //injection de dépendance cardService et du formBuilder
  constructor(private cardService:CardService, private formBuilder: FormBuilder) {
    this.changeText = false;// on initialise le boolean (utilisé la fonction mouseOver) a false
     }

  //cartà deviver=cartList
  guessingCardList: Card []= [];// liste des cartes à deviner (liste vide)
  guessingCard: Card | undefined; // carte en cours
  cardAlreadyGuessed: Card []=[];// liste des cartes déjà deviner (liste vide)
   cardId=0;

  //fonction aleatoire pour trouver un nombre entre min et max
  idAleatoire(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit(): void {
    this.cardService.getCardList(1).subscribe(cardList=>{
       this.guessingCardList=cardList// remplir la liste des cartes à deviner par  cartList
this.changeCard(this.guessingCardList);
    });
  }




  isCorrect() {
    let submitDate = this.guessForm.get("formDate")?.value;
    console.log("la valeur entrée :"+ this.guessForm.get("formDate")?.value);
   // la fonction "getfullyear" ne me donne pas l'année.
    console.log("l'année de la carte en cours est' :"+ this.guessCardDate);
    // Faire la fonction qui permet de tester l'égalité entre les dates

     if (submitDate==this.guessCardDate)
     {
      if (this.guessingCard) {
        console.log("je suis ici");
         this.cardAlreadyGuessed.push(this.guessingCard); // Puis mettre la carte devinée dans carte trouvée

//supprime la carte en cours
       this.guessingCardList.splice(this.cardId,1);

        //Appel de la fonction qui change la carte à deviner vu que la nouvelle CardList a été mis à jour
        this.changeCard(this.guessingCardList);

        //remise à 0 du champs de l'input date
        this.guessForm.reset(0);
      }
  }

  }


  //fonction qui change la carte a deviner
  changeCard(guessingCardList: Card []){
    //tirage du nombre aléatoire
    this.cardId=this.idAleatoire(0,guessingCardList.length)

    // Récupération du nb aléatoire et affichage de la carte à deviner
    this.guessingCard=guessingCardList[this.cardId];
    //initialise l'attribut guessCardDate en recupérant l'année de guessingCard
    this.guessCardDate = new Date(this.guessingCard.date).getFullYear();
    console.log( this.guessingCard);
    console.log(guessingCardList);
  }
}
