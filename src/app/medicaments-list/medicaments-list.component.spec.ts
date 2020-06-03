import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentsListComponent } from './medicaments-list.component';

describe('MedicamentsListComponent', () => {
  let component: MedicamentsListComponent;
  let fixture: ComponentFixture<MedicamentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
