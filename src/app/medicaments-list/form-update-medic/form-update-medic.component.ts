import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MedicamentService} from '../../services/medicament.service';

@Component({
  selector: 'app-form-update-medic',
  templateUrl: './form-update-medic.component.html',
  styleUrls: ['./form-update-medic.component.css']
})
export class FormUpdateMedicComponent implements OnInit {

  validatingForm: FormGroup;

  private sCompo: string;
  private sEffect: string;
  private sContreIndic: string;

  @Input() ref: string;
  @Input() name: string;
  @Input() compo: string;
  @Input() effect: string;
  @Input() contreIndic: string;

  get updMedicFormModalCompo() { return this.validatingForm.get('updMedicFormModalCompo'); }
  get updMedicFormModalEffect() { return this.validatingForm.get('updMedicFormModalEffect'); }
  get updMedicFormModalContreIndic() { return this.validatingForm.get('updMedicFormModalContreIndic'); }

  constructor(private medicService: MedicamentService) { }

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      updMedicFormModalCompo: new FormControl('', Validators.required),
      updMedicFormModalEffect: new FormControl('', Validators.required),
      updMedicFormModalContreIndic: new FormControl('')
    });

    this.sCompo = this.compo;
    this.sEffect = this.effect;
    this.sContreIndic = this.contreIndic;
  }

  onSubmit() {
    if (this.validatingForm.valid) {
      this.medicService.updateMedic(
        this.ref,
        this.updMedicFormModalCompo.value,
        this.updMedicFormModalEffect.value,
        this.updMedicFormModalContreIndic.value
      );
    }
  }

  onCancel() {
    this.validatingForm.reset({
      updMedicFormModalCompo: this.sCompo,
      updMedicFormModalEffect: this.sEffect,
      updMedicFormModalContreIndic: this.sContreIndic
    });
  }
}
