import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { VisitesComponent } from './visites/visites.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TableRapportsVisitesComponent } from './visites/table-rapports-visites/table-rapports-visites.component';
import { RapportsVisistesService } from './services/RapportsVisistesService';
import {HttpClientModule} from '@angular/common/http';
import { MedicamentsListComponent } from './medicaments-list/medicaments-list.component';
import {MedicamentService} from './services/medicament.service';
import { MedecinsListComponent } from './medecins-list/medecins-list.component';
import {MedecinService} from './services/medecin.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ModalRapportsVisitesComponent } from './visites/modal-rapports-visites/modal-rapports-visites.component';
import { FormUpdateMedecinComponent } from './medecins-list/form-update-medecin/form-update-medecin.component';
import { FormUpdateMedicComponent } from './medicaments-list/form-update-medic/form-update-medic.component';

const appRoutes: Routes = [

  { path: 'connexion', component: ConnexionComponent},
  { path: 'accueil', canActivate: [AuthGuard], component: AccueilComponent},
  { path: 'medicaments', canActivate: [AuthGuard], component: MedicamentsComponent},
  { path: 'medecins', canActivate: [AuthGuard], component: MedecinsComponent},
  { path: 'visites', canActivate: [AuthGuard], component: VisitesComponent},
  { path: '', component: ConnexionComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    MedicamentsComponent,
    MedecinsComponent,
    VisitesComponent,
    AccueilComponent,
    TableRapportsVisitesComponent,
    MedicamentsListComponent,
    MedecinsListComponent,
    ModalRapportsVisitesComponent,
    FormUpdateMedecinComponent,
    FormUpdateMedicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    MedicamentService,
    MedecinService,
    RapportsVisistesService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
