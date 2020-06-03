import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PPE-GSBAppliCR';

  constructor(private authService: AuthService,
              private route: Router) { }

    
    public get AuthService() : AuthService {
      return this.authService;
    }
    

  ngOnInit() {
  }

  // Déconnexion, redirection vers la page connexion
  logout() {
    this.authService.signOut();
    this.route.navigate(['/connexion']);
  }
}
