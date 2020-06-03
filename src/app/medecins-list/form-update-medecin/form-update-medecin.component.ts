import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MedecinService} from '../../services/medecin.service';

@Component({
  selector: 'app-form-update-medecin',
  templateUrl: './form-update-medecin.component.html',
  styleUrls: ['./form-update-medecin.component.css']
})
export class FormUpdateMedecinComponent implements OnInit {

  validatingForm: FormGroup;
  // private save = [];

  private sAddr: string;
  private sPhone: string;
  private sSpec: string;

  @Input() id: number;
  @Input() name: string;
  @Input() firstName: string;
  @Input() addr: string;
  @Input() phone: string;
  @Input() spec: string;

  constructor(private medService: MedecinService) { }

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      updMedecinFormModalAddr: new FormControl('', Validators.required),
      updMedecinFormModalPhone: new FormControl('', [Validators.pattern('[0-9]{10}'), Validators.required]),
      updMedecinFormModalSpec: new FormControl('')
    });

    this.sAddr = this.addr;
    this.sPhone = this.phone;
    this.sSpec = this.spec;
    // const saveTab = {addr: this.addr, phone: this.phone, spec: this.spec};
    // this.save.push(saveTab);
  }

  get updMedecinFormModalAddr() { return this.validatingForm.get('updMedecinFormModalAddr'); }
  get updMedecinFormModalPhone() { return this.validatingForm.get('updMedecinFormModalPhone'); }
  get updMedecinFormModalSpec() { return this.validatingForm.get('updMedecinFormModalSpec'); }

  onSubmit() {
    if (this.validatingForm.valid) {
      this.medService.updateMedecin(
        this.id, this.updMedecinFormModalAddr.value,
        this.updMedecinFormModalPhone.value,
        this.updMedecinFormModalSpec.value
      );
    }
  }

  onCancel() {
    this.validatingForm.reset({
      updMedecinFormModalAddr: this.sAddr,
      updMedecinFormModalPhone: this.sPhone,
      updMedecinFormModalSpec: this.sSpec
    });
  }
}
