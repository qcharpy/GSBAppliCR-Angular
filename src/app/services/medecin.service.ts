import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  medecinSubject = new Subject<any[]>();
  private medecinsList = [];

  constructor(private http: HttpClient) { }

  updateMedecin(id: number, addr: string, phone: string, spec: string) {
    this.http.get('https://webserv-gr3.sio-carriat.com/gsbapi/?id2='
      + id + '&adresse=' + addr + '&tel=' + phone + '&speComplementaire=' + spec).subscribe();
  }

  getAllMedecin() {
    this.http.get<any[]>('https://webserv-gr3.sio-carriat.com/gsbapi/?noms=').subscribe(
      (response) => {
        this.medecinsList = response;
        this.emitMedecinSubject();
      }
    );
  }

  searchMedecin(name: string) {
    this.http.get<any[]>('https://webserv-gr3.sio-carriat.com/gsbapi/?noms=' + name).subscribe(
      (response) => {
        this.medecinsList = response;
        this.emitMedecinSubject();
      }
    );
  }

  emitMedecinSubject() { this.medecinSubject.next(this.medecinsList.slice()); }

}
