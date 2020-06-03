import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';


@Injectable()
export class AuthService{

  // Variables
  private isAuth = false;
  private user: User;


  public get IsAuth() : boolean {
    return this.isAuth;
  }


  public get User() : User
  {
    return this.user;
  }

  constructor(private httpClient: HttpClient){}

  // Connexion (récupération du login et mdp dans l'API)
  signIn(login, mdp) {
    return new Promise((resolve, reject) => {
      this.httpClient.get<any>('https://webserv-gr3.sio-carriat.com/gsbapi/?login='+login).subscribe(
        authData => {
          // authData est à 0 si l'utilisateur est reconnu
          if(authData[0] !== undefined)
          {
            // Comparaison des données de l'API et du form de connexion
            if(login === authData[0].login && mdp === authData[0].mdp){
              this.user = new User(authData[0].id, authData[0].prenom, authData[0].nom, authData[0].login, authData[0].mdp)
              this.isAuth = true;
              resolve(true);
            }
            // Si le login est bon mais pas le mdp on affiche un msg d'erreur
            else{
              resolve(false);
            }
          }
          // Si le login n'est pas bon, on affiche un msg d'erreur
          else{
            resolve(false);
          }
        });
      });
    }

    // Déconnexion
    signOut() {
      this.isAuth = false;
      this.user = undefined;
    }

}
