import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { IPotwory } from '../ipotwory';
import { PotworyServerService } from '../potwory-server.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Csvexporter } from '../csv'


@Component({
  selector: 'app-table-view',
  templateUrl: './tabela-view.component.html',
  styleUrls: ['./tabela-view.component.css']
})
export class TabelaViewComponent implements OnInit {

  displayedColumns: string[] = ['IMG', 'Nazwa', 'Opis', 'Akcja'];

  @Input() potwory: IPotwory[];  

  @Input() showTabelaContent: boolean;

  @Output("loadPotwory") loadPotwory: EventEmitter<any> = new EventEmitter();

  dataSource : MatTableDataSource<IPotwory>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  isLoaded = false

  constructor(private potworyService: PotworyServerService, private exporter:Csvexporter) {
    this.potworyService.getPotwory().subscribe(data =>{  
      this.dataSource = new MatTableDataSource(data); 
      this.dataSource.paginator = this.paginator;  
      this.dataSource.sort = this.sort;
      this.isLoaded = true 
    });

  }
  
  ngOnInit(): void {
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
    
  }

  applyFilter(filterValue: string) {  
    this.dataSource.filter = filterValue.trim().toLowerCase();  
  
    if (this.dataSource.paginator) {  
      this.dataSource.paginator.firstPage();  
    }  
  }
  

  deletePotwory(id: number): void {
    this.potworyService
        .deletePotwory(id)
        .subscribe(()=> {
          this.loadPotwory.emit();
        });
  }
  downloadCSV(){
    this.exporter.downloadCSV(this.potwory);
  }

}