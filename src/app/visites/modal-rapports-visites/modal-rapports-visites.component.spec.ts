import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRapportsVisitesComponent } from './modal-rapports-visites.component';

describe('ModalRapportsVisitesComponent', () => {
  let component: ModalRapportsVisitesComponent;
  let fixture: ComponentFixture<ModalRapportsVisitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRapportsVisitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRapportsVisitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
