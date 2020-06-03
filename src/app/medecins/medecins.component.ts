import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MedecinService} from '../services/medecin.service';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.css']
})
export class MedecinsComponent implements OnInit {

  title = 'Les Médecins';

  @Input() name: string;

  medecins: any[];
  medecinSubscription: Subscription;

  constructor(private medService: MedecinService) { }

  ngOnInit(): void {
    this.medService.getAllMedecin();
    this.medecinSubscription = this.medService.medecinSubject.subscribe(
      (meds: any[]) => {
        this.medecins = meds;
      }
    );
    this.medService.emitMedecinSubject();
  }

  onSearchMedecin() {
    this.medService.searchMedecin(this.name);
    this.medecinSubscription = this.medService.medecinSubject.subscribe(
      (meds: any[]) => {
        this.medecins = meds;
      }
    );
    this.medService.emitMedecinSubject();
  }

}
