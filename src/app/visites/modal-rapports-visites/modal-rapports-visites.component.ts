import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from "angular-bootstrap-md/angular-bootstrap-md";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RapportsVisistesService } from "../../services/RapportsVisistesService";
import { MedicamentService } from "../../services/medicament.service";
import { MedecinService } from "../../services/medecin.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-rapports-visites',
  templateUrl: './modal-rapports-visites.component.html',
  styleUrls: ['./modal-rapports-visites.component.css']
})
export class ModalRapportsVisitesComponent implements OnInit {

  @ViewChild('modalRapportsVisites') modalRapportsVisites: ModalDirective

  formRapport: FormGroup;

  medecinsSouscription: Subscription;
  listeMedecins: any[];

  medicamentsSouscription: Subscription;
  listeMedicaments: any[];
  medicamentsSelect: any[] = [];


  constructor(private formBuilder: FormBuilder, private medicamentsService: MedicamentService, private medecinsService: MedecinService) { }

  ngOnInit(): void {
    
      this.formRapport = this.formBuilder.group
      (
        {
          dateVisite: ['', Validators.required],
          medecin: ['', Validators.required],
          motifVisite: ['', Validators.required],
          bilan: ['', Validators.required],
          medicament: ['']
        }
      );

    this.medicamentsSouscription = this.medicamentsService.medicSubject.subscribe
    (
      (medicaments: any[]) => 
      {
      this.listeMedicaments = medicaments;
      }
    )

    this.medecinsSouscription = this.medecinsService.medecinSubject.subscribe
    (
      (medeciens: any[]) =>
      {
        this.listeMedecins = medeciens;
      }
    )

    this.medicamentsService.getAllMedic();
    this.medecinsService.getAllMedecin();

  }

  initForm(donnees?: any[])
  {

  }


  Ouvrir(donnees?: any[])
  {
    this.modalRapportsVisites.show();
  }


  AjouterMedicamentOffert()
  {
    if (this.formRapport.controls['medicament'].value != '') 
    {
      let indexSelect = this.formRapport.controls['medicament'].value
      if (this.listeMedicaments[indexSelect] != undefined) 
      {
        this.medicamentsSelect.push(this.listeMedicaments[indexSelect]);
        this.listeMedicaments.splice(indexSelect, 1);
        this.medicamentsSelect.sort(function tri(a, b) 
        {
          if (a.nomCommercial < b.nomCommercial) {
            return -1;
          }
          else if (a.nomCommercial === b.nomCommercial) {
            return 0;
          }
          else
          {
            return 1;
          }
        });
      }
    }
  }

  SupprimerMedicamentOffert(index: number)
  {
    this.listeMedicaments.push(this.medicamentsSelect[index]);
    this.medicamentsSelect.splice(index, 1);
    this.listeMedicaments.sort(function tri(a, b) {
      if (a.nomCommercial < b.nomCommercial) {
        return -1;
      }
      else if (a.nomCommercial === b.nomCommercial) {
        return 0;
      }
      else {
        return 1;
      }
    });
  }
}
