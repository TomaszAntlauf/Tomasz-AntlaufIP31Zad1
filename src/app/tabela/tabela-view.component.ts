import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPotwory } from '../ipotwory';
import { PotworyServerService } from '../potwory-server.service';
import { Csvexporter } from '../csv'
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator'




@Component({
  selector: 'app-table-view',
  templateUrl: './tabela-view.component.html',
  styleUrls: ['./tabela-view.component.css']
})
export class TabelaViewComponent implements OnInit {

  displayedColumns: string[] = ['IMG', 'Nazwa', 'Opis', 'Akcja'];

  @Input() pot: IPotwory[];  

  public form: FormGroup;
  public potwory:IPotwory[]=[];

  @Input() showTabelaContent: boolean;

  @Output("loadPotwory") loadPotwory: EventEmitter<any> = new EventEmitter();

  length: number = 0;
  pageSize: number = 3;  
  pageSizeOptions: number[] = [3, 6, 9];
  pageEvent = new PageEvent();



 
  constructor(private fb: FormBuilder, private potworyService: PotworyServerService, private exporter:Csvexporter) {
    this.form = this.fb.group({
      sort: new FormControl(null),
      filtr: new FormControl(null)
      
    });

  }
  
  ngOnInit(): void {
    let sort=localStorage.getItem("sort");
    let filtr=localStorage.getItem("filtr");
    this.potworyService.getPotwory(filtr,sort).subscribe(pot=>this.potwory=pot);
    //this.potwory = this.potwory.slice(0,3);
    //this.length = this.potwory.length;
   
  }

 /* OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.potwory = this.potwory.slice(startIndex, endIndex);
    return event;
  }
  */

 
  isAdminAuthenticated() {
    const uType: string = localStorage.getItem("uType");
    if (uType == 'admin') {
      return true;
    }
    else {
      return false;
    }
  }
  

  deletePotwory(id: number): void {
    this.potworyService
        .deletePotwory(id)
        .subscribe(()=> {
          this.loadPotwory.emit();
        });
  }

  onSubmit(){
    let sort=this.form.controls['sort'].value;
    let filtr=this.form.controls['filtr'].value;
    localStorage.setItem("sort",sort);
    localStorage.setItem("filtr",filtr);
    this.potworyService.getPotwory(filtr,sort).subscribe(pot=>this.potwory=pot);
  }

  reset(){
    let sort=this.form.controls['sort'].value;
    let filtr=this.form.controls['filtr'].value;
    localStorage.setItem("",sort);
    localStorage.setItem("",filtr);
    this.potworyService.getPotwory(filtr, sort).subscribe(pot=>this.potwory=pot);
  }
  
  downloadCSV(){
    this.exporter.downloadCSV(this.potwory);
  }
}