import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateMedecinComponent } from './form-update-medecin.component';

describe('FormUpdateMedecinComponent', () => {
  let component: FormUpdateMedecinComponent;
  let fixture: ComponentFixture<FormUpdateMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUpdateMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpdateMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
