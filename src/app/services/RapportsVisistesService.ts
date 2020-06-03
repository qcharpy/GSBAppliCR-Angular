import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RapportsVisistesService
{
    private rapportsVisites: any[];
    rapportsSubject = new Subject<any[]>();

    constructor(private httpClient: HttpClient) { }

    emitRapportsSubject() 
    {
        this.rapportsSubject.next(this.rapportsVisites.slice());
    }

    getAllRapportsVisites(idVisiteur : String) {
        this.httpClient
          .get<any[]>('https://webserv-gr3.sio-carriat.com/gsbapi/?id5=' + idVisiteur)
          .subscribe
          (
            (response) => 
            {
              this.rapportsVisites = response;
              this.emitRapportsSubject();
            },
            (error) => 
            {
              console.log('Erreur ! : ' + error);
            }
          );
    }


    getRapportsVisitesDate(idVisiteur : String, dateVisite: String) {
      this.httpClient
        .get<any[]>('https://webserv-gr3.sio-carriat.com/gsbapi/?id5=' + idVisiteur + '&dateVisite=' + dateVisite)
        .subscribe
        (
          (response) => 
          {
            this.rapportsVisites = response;
            this.emitRapportsSubject();
          },
          (error) => 
          {
            console.log('Erreur ! : ' + error);
          }
        );
  }

  getRapportsVisitesMedecin(idVisiteur: String, medecin: String)
  {
    this.httpClient
        .get<any[]>('https://webserv-gr3.sio-carriat.com/gsbapi/?id5=' + idVisiteur + '&medecinVisite=' + medecin)
        .subscribe
        (
          (response) => 
          {
            this.rapportsVisites = response;
            this.emitRapportsSubject();
          },
          (error) => 
          {
            console.log('Erreur ! : ' + error);
          }
        );
  }

  
  getRapportsVisitesDateEtMedecin(idVisiteur: String, dateVisite: String, medecin: String)
  {
    this.httpClient
    .get<any[]>('https://webserv-gr3.sio-carriat.com/gsbapi/?id5=' + idVisiteur + '&dateVisite=' + dateVisite + "&medecinVisite=" + medecin)
    .subscribe
    (
      (response) => 
      {
        this.rapportsVisites = response;
        this.emitRapportsSubject();
      },
      (error) => 
      {
        console.log('Erreur ! : ' + error);
      }
    );
  }
}