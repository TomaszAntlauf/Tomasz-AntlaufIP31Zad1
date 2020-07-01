import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPotwory } from '../ipotwory';
import { PotworyServerService } from '../potwory-server.service';

@Component({
  selector: 'app-tile',
  templateUrl: './kafle.component.html',
  styleUrls: ['./kafle.component.css']
})
export class KafleComponent implements OnInit {

  @Input() potwory: IPotwory;

  @Output("loadPotworySignal") loadPotworySignal: EventEmitter<any> = new EventEmitter();

  constructor(private potworyService: PotworyServerService) { }

  ngOnInit(): void {console.log(this.potwory);
  }

  deletePotwory(id: number): void {
    this.potworyService
        .deletePotwory(id)
        .subscribe(()=> {
          this.loadPotworySignal.emit();
        });
  }
  isAdminAuthenticated() {
    const uType: string = localStorage.getItem("uType");
    if (uType == 'admin') {
      return true;
    }
    else {
      return false;
    }
  }

}