import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()

export class AuthGuard implements CanActivate{

  constructor(private authservice: AuthService, private route: Router){}

// Activation des routes et des onglets si le visiteur est connecté
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authservice.IsAuth)
    {
      return true;
    }
    else
    {
      this.route.navigate(['/connexion']);
    }
  }
}
