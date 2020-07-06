import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { IPotwory } from '../ipotwory';
import { PotworyServerService } from '../potwory-server.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Csvexporter } from '../csv'




@Component({
  selector: 'app-tile-view',
  templateUrl: './kafle-view.component.html',
  styleUrls: ['./kafle-view.component.css']
})
export class KafleViewComponent implements OnInit {

  @Input() pot: IPotwory[]; 

  public form: FormGroup
  public potwory:IPotwory[]=[];

  @Input() showKafleContent: boolean;

  @Output("loadPotwory") loadPotwory: EventEmitter<any> = new EventEmitter();


 
  constructor(private fb: FormBuilder,private potworyService: PotworyServerService, private exporter:Csvexporter) {
    
    this.form = this.fb.group({
      sort: new FormControl(null),
      filtr: new FormControl(null)
    });
  }

  ngOnInit(): void {
    let sort=localStorage.getItem("sort");
    let filtr=localStorage.getItem("filtr");
    this.potworyService.getPotwory(filtr, sort).subscribe(pot=>this.potwory=pot);
  }
  
  onSubmit(){
   
    let sort=this.form.controls['sort'].value;
    let filtr=this.form.controls['filtr'].value;
    localStorage.setItem("sort",sort);
    localStorage.setItem("filtr",filtr);
    this.potworyService.getPotwory(filtr, sort).subscribe(pot=>this.potwory=pot);
  }

  reset(){
    let sort=this.form.controls['sort'].value;
    let filtr=this.form.controls['filtr'].value;
    localStorage.setItem("",sort);
    localStorage.setItem("",filtr);
    this.potworyService.getPotwory(filtr, sort).subscribe(pot=>this.potwory=pot);
  }
  

  loadPotworySignal(){
    this.loadPotwory.emit();
  }

  downloadCSV(){
    this.exporter.downloadCSV(this.potwory);
  }


  
}