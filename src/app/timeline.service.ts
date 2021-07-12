import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Timeline} from "./timeline";

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  baseAPIUrl='http://localhost:8080/api/timeline';
  constructor(private http: HttpClient) { }

  // Service qui permet d'aller chercher les données de l'API et retourne un format de Liste de données
  getTimelineList() {
    return this.http.get<Timeline[]>(this.baseAPIUrl);
  }
  //service qui permet supprimer un timeline
  deleteTimelineList() {
    return this.http.delete<Timeline[]>(this.baseAPIUrl);
  }
}
