import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent implements OnInit {

  // Variables
  loginForm: FormGroup;
  erreur: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private route: Router){}


  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      mdp: ['', Validators.required],
    });
  }

  onSignIn(){
    const formValue = this.loginForm.value;
    this.authService.signIn(formValue.login, formValue.mdp).then(resultConnexion =>{
      if (resultConnexion) 
      {
        this.route.navigate(['accueil']);
      } 
      else 
      {
        this.erreur = true;
      }
    });
  }
}
