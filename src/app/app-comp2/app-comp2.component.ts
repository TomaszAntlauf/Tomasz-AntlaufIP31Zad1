import { Component, OnInit } from '@angular/core';
import { IPotwory } from '../ipotwory';
import { PotworyService } from '../potwory.service';

@Component({
  selector: 'app-app-comp2',
  templateUrl: './app-comp2.component.html',
  styleUrls: ['./app-comp2.component.css']
})
export class AppComp2Component implements OnInit {

  public potwory: IPotwory[];
  private potworyService: PotworyService;
  public var1: boolean =false;
  public var2: boolean =false;

  public onZmiana(event:any,id:number){
    document.getElementById("label").innerHTML = "ID tego potwora to: "+this.potwory[id].id;
  }
  
  public onZmiana2(event:any,id:string){
    if(id=="kafelek1"){
      document.getElementById("label").innerHTML = "ID tego potwora to: "+this.potwory[0].id;
    }
    else if(id=="kafelek2"){
      document.getElementById("label").innerHTML = "ID tego potwora to: "+this.potwory[1].id;
    }
    else if(id=="kafelek3"){
      document.getElementById("label").innerHTML = "ID tego potwora to: "+this.potwory[2].id;
    }
    else if(id=="kafelek4"){
      document.getElementById("label").innerHTML = "ID tego potwora to: "+this.potwory[3].id;
    }
    else if(id=="kafelek5"){
      document.getElementById("label").innerHTML = "ID tego potwora to: "+this.potwory[4].id;
    }
  }
  
  constructor(private _PotworyService: PotworyService){}

  ngOnInit(): void {
    this._PotworyService.myData.subscribe((data)=>{
      this.potwory = data;
    })
  }

  public onClick(event:any):void{
    this.var1=true;
    this.var2=false;
  }

  public onClick2(event:any):void{
    this.var2=true;
    this.var1=false;
  }
  public nazwa(id:number){
    return this.potwory[id].nazwa;
  }
  public info(id:number){
    return this.potwory[id].info;
  }
  public img(id:number){
    return this.potwory[id].img;
  }

}
