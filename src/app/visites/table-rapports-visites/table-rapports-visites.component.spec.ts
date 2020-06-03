import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRapportsVisitesComponent } from './table-rapports-visites.component';

describe('TableRapportsVisitesComponent', () => {
  let component: TableRapportsVisitesComponent;
  let fixture: ComponentFixture<TableRapportsVisitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRapportsVisitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRapportsVisitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
