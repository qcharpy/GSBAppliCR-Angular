import {Component, Input, OnInit} from '@angular/core';
import {MedicamentService} from '../services/medicament.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent implements OnInit {

  title = 'Les Médicaments';

  @Input() ref: string;

  medics: any[];
  medicSubscription: Subscription;

  constructor(private medicService: MedicamentService) {}

  ngOnInit(): void {
    this.medicService.getAllMedic();
    this.medicSubscription = this.medicService.medicSubject.subscribe(
      (medic: any[]) => {
        this.medics = medic;
      }
    );
    this.medicService.emitMedicSubject();
  }

  onSearchMedecin() {
    this.medicService.searchMedic(this.ref);
    this.medicSubscription = this.medicService.medicSubject.subscribe(
      (medic: any[]) => {
        this.medics = medic;
      }
    );
    this.medicService.emitMedicSubject();
  }

}
