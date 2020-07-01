import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main/main-view.component';
import { SzczegolyComponent } from './szczegoly/szczegoly.component';
import { NowyComponent } from './nowy/nowy.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { RoleGuardService } from './role-guard.service';

const routes: Routes = [
  { 
    path:'', 
    component: MainViewComponent, 
    canActivate: [AuthGuardService]
  },
  { 
    path:'login',
    component: LoginComponent
  },
  { 
    path:'new-potwor',
    component: NowyComponent,
    canActivate: [RoleGuardService], 
    data: { 
      expectedRole: 'admin'
    }
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