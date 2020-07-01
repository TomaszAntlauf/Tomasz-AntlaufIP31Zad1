import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPotwory } from '../ipotwory';
import { PotworyServerService } from '../potwory-server.service';

@Component({
  selector: 'app-szczegoly',
  templateUrl: './szczegoly.component.html',
  styleUrls: ['../app.component.css', './szczegoly.component.css']
})
export class SzczegolyComponent implements OnInit {

  potwory: IPotwory;
  Id: number;
  loading: boolean;
  noData: boolean;
  edit: boolean;

  img = [
    'assets/bazy.png',
    'assets/krabo.png',
    'assets/leszy.png',
    'assets/troll.png',
    'assets/widlo.png'
  ];

  constructor(private route: ActivatedRoute, private potworyService: PotworyServerService) {

  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.Id = +params.get('id');
      });
    this.loadPotwory();
  }

  loadPotwory(): void {
    this.loading = true;
    this.potworyService.getOnePotwory(this.Id)
      .subscribe(potwory => {
        this.potwory = potwory;
        this.loading = false;
      },
        error => console.log(error));
  }
  deletePotwory(id: number): void {
    this.potworyService
      .deletePotwory(id)
      .subscribe(() => {
        this.noData = true;
        this.loadPotwory();
      });
  }
  showEditForm() {
    this.edit = true;
  }
  showDetailsForm() {
    this.edit = false;
  }
  public onSubmit() {
    this.potworyService.updatePotwory(this.Id,this.potwory).subscribe(result => console.log(result));
  }

  getErrorMessage() {
    return 'Error';
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