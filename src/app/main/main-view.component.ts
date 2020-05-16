import { Component, OnInit, Output } from '@angular/core';
import { PotworyServerService } from '../potwory-server.service';
import {IPotwory}from '../ipotwory'

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainViewComponent implements OnInit {

  showTableVar: boolean = true;
  showTileVar: boolean = false;
  spanVar: string = 'Nie wybrano żadnego obiektu';
  loading: boolean;
  potwory: IPotwory[] = []; 

  constructor(private potworyService: PotworyServerService) { }

  ngOnInit(): void {
    this.loadPotwory();
  }

  showTable() {
    this.showTableVar = true;
    this.showTileVar = false;
  }

  showTile() {
    this.showTableVar = false;
    this.showTileVar = true;
  }

  loadPotwory(){
    this.loading = true;
    this.potworyService.getPotwory()
                        .subscribe(pot => {
                          this.potwory = pot;
                          this.loading = false;
                        },
                          error => console.log(error));
  }

}