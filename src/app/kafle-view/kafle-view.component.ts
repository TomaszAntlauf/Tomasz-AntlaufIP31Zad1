import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { IPotwory } from '../ipotwory';
import { PotworyServerService } from '../potwory-server.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-tile-view',
  templateUrl: './kafle-view.component.html',
  styleUrls: ['./kafle-view.component.css']
})
export class KafleViewComponent implements OnInit {

  @Input() potwory: IPotwory[]; 

  @Input() showKafleContent: boolean;

  @Output("loadPotwory") loadPotwory: EventEmitter<any> = new EventEmitter();

  dataSource : MatTableDataSource<IPotwory>;
  

  constructor(private potworyService: PotworyServerService) {
   
   }

  ngOnInit(): void {
  }

  loadPotworySignal(){
    this.loadPotwory.emit();
  }


}