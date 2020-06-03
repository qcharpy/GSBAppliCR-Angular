import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateMedicComponent } from './form-update-medic.component';

describe('FormUpdateMedicComponent', () => {
  let component: FormUpdateMedicComponent;
  let fixture: ComponentFixture<FormUpdateMedicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUpdateMedicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpdateMedicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
