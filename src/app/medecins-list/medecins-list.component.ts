import {Component, Input, OnInit} from '@angular/core';
import {MedecinService} from '../services/medecin.service';

@Component({
  selector: 'app-medecins-list',
  templateUrl: './medecins-list.component.html',
  styleUrls: ['./medecins-list.component.css']
})
export class MedecinsListComponent implements OnInit {

  @Input() id: number;
  @Input() firstname: string;
  @Input() name: string;
  @Input() address: string;
  @Input() tel: string;
  @Input() spec: string;
  @Input() dep: string;

  leMedecin: any[];

  visible = false;
  update = false;

  constructor(private medService: MedecinService) { }

  ngOnInit(): void {}

  onGetMedecin() {
    this.visible = this.visible === false;
    this.update = this.update === false;
  }

}
