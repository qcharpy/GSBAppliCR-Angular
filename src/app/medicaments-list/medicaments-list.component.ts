import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-medicaments-list',
  templateUrl: './medicaments-list.component.html',
  styleUrls: ['./medicaments-list.component.css']
})
export class MedicamentsListComponent implements OnInit {

  @Input() ref: string;
  @Input() name: string;
  @Input() idFam: string;
  @Input() compo: string;
  @Input() effect: string;
  @Input() contraindication: string;

  visible = false;
  update = false;

  constructor() {}

  ngOnInit(): void {}

  onGetMedic() {
    this.visible = this.visible === false;
    this.update = this.update === false;
  }

}
