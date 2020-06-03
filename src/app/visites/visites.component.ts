import { Component, OnInit, ViewChild } from '@angular/core';
import { RapportsVisistesService } from "../services/RapportsVisistesService";
import { DatePipe } from '@angular/common';
import { ModalRapportsVisitesComponent } from "./modal-rapports-visites/modal-rapports-visites.component";

@Component({
  selector: 'app-visites',
  templateUrl: './visites.component.html',
  styleUrls: ['./visites.component.css']
})
export class VisitesComponent implements OnInit {

  constructor(private rapportsService: RapportsVisistesService) { }

  medecinRecherche: String = "";
  dateVisiteRecherche: String = "";
  dateJour: Date = new Date();
  datePipe: DatePipe = new DatePipe('en-US');

  @ViewChild('modalRapportsVisites') modalRapportsVisites: ModalRapportsVisitesComponent;

  ngOnInit(): void {
    
  }

  filtrageRapportsVisites()
  {
    
    if (this.dateVisiteRecherche != "" && new Date(this.dateVisiteRecherche.toString()) > this.dateJour) 
    {
      this.dateVisiteRecherche = this.datePipe.transform(this.dateJour, 'yyyy-MM-dd');
    }

    if (this.dateVisiteRecherche === "" && this.medecinRecherche != "") 
    {
      this.rapportsService.getRapportsVisitesMedecin("a131", this.medecinRecherche);  
    }
    else if (this.dateVisiteRecherche != "" && this.medecinRecherche === "") 
    {
      this.rapportsService.getRapportsVisitesDate("a131", this.dateVisiteRecherche);  
    }
    else if (this.dateVisiteRecherche != "" && this.medecinRecherche != "") 
    {
      this.rapportsService.getRapportsVisitesDateEtMedecin("a131", this.dateVisiteRecherche, this.medecinRecherche);  
    }
    else
    {
      this.rapportsService.getAllRapportsVisites("a131");
    }
  }


  OuvrirModalRapportsVisites(donnees? : any[])
  {
    if (donnees) 
    {
      this.modalRapportsVisites.Ouvrir(donnees);

    } 
    else 
    {
      this.modalRapportsVisites.Ouvrir();
    }
    
  }
}
