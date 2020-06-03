import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  // Variable
  user: User;

  constructor(private authService: AuthService) { }

  // Appel à authService
  ngOnInit() {
    this.user = this.authService.User;
  }

}
