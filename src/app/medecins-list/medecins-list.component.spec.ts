import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinsListComponent } from './medecins-list.component';

describe('MedecinsListComponent', () => {
  let component: MedecinsListComponent;
  let fixture: ComponentFixture<MedecinsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecinsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
