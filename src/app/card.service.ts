import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Timeline} from "./timeline";
import {Card} from "./card";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  baseAPIUrl='http://localhost:8080/api/timeline';

  constructor(private http: HttpClient) { }

  // Service qui permet de supprimer une carte
  deleteCardList(tid:number, cid:number ) {
    return this.http.delete<Card[]>(this.baseAPIUrl + '/' + tid + '/card/' + cid);
  }

  // Service qui permet de afficher la liste des cartes
  getCardList(tid:number){
    return this.http.get<Card[]>(this.baseAPIUrl+'/'+tid+'/card');
  }

}

