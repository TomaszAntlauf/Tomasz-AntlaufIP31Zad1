import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-potwory',
  templateUrl: './app-comp2.component.html',
  styleUrls: ['./app-comp2.component.css']
})
export class PotworyComponent implements OnInit {
  activatedRoute: any;
  name: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}