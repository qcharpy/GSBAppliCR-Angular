import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef, OnDestroy, Input } from '@angular/core';
import { RapportsVisistesService } from "../../services/RapportsVisistesService";
import { Subscription } from 'rxjs';
import { ModalRapportsVisitesComponent } from "../modal-rapports-visites/modal-rapports-visites.component";

@Component({
  selector: 'app-table-rapports-visites',
  templateUrl: './table-rapports-visites.component.html',
  styleUrls: ['./table-rapports-visites.component.css']
})
export class TableRapportsVisitesComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() modalRapportsVisites: ModalRapportsVisitesComponent;

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective

  lesRapports: any = [];
  lesRapportsPrecedents: any = [];
  rapportsSouscription: Subscription;
  colonnes = ['Numéro', 'Date', 'Médecin', 'Motif'];

  constructor(private cdRef: ChangeDetectorRef, private rapportsService: RapportsVisistesService) { }
  
  ngOnDestroy(): void 
  {
    
  }
  
  ngOnInit() 
  {

     
    this.rapportsSouscription = this.rapportsService.rapportsSubject.subscribe(
      (rapports: any[]) => {

        this.lesRapports = rapports;

        this.mdbTable.setDataSource(this.lesRapports);
        this.lesRapports = this.mdbTable.getDataSource();
        this.lesRapportsPrecedents = this.mdbTable.getDataSource();
        this.mdbTablePagination.firstPage();
        
      }
    );
    
    this.rapportsService.getAllRapportsVisites('a131');

  }

  ngAfterViewInit() {

    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
    
  }
}
