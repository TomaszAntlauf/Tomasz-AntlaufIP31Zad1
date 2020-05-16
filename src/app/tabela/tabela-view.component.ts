import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPotwory } from '../ipotwory';
import { PotworyServerService } from '../potwory-server.service';

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

  constructor(private potworyService: PotworyServerService) {

  }

  ngOnInit(): void {
  }

  deletePotwory(id: number): void {
    this.potworyService
        .deletePotwory(id)
        .subscribe(()=> {
          this.loadPotwory.emit();
        });
  }

}