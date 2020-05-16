import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main/main-view.component';
import { SzczegolyComponent } from './szczegoly/szczegoly.component';
import { NowyComponent } from './nowy/nowy.component';

const routes: Routes = [
  { 
    path:'', 
    component: MainViewComponent 
  },
  { 
    path:'new-potwor',
    component: NowyComponent
  },
  { 
    path:'potwory/:id',
    component: SzczegolyComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }