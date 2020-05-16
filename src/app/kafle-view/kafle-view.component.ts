import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPotwory } from '../ipotwory';
import { PotworyServerService } from '../potwory-server.service';

@Component({
  selector: 'app-tile-view',
  templateUrl: './kafle-view.component.html',
  styleUrls: ['./kafle-view.component.css']
})
export class KafleViewComponent implements OnInit {

  @Input() potwory: IPotwory[]; 

  @Input() showKafleContent: boolean;

  @Output("loadPotwory") loadPotwory: EventEmitter<any> = new EventEmitter();

  constructor(private potworyService: PotworyServerService) { }

  ngOnInit(): void {
  }

  loadPotworySignal(){
    this.loadPotwory.emit();
  }


}