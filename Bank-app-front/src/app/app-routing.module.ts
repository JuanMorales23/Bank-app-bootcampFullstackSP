import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { ClientsDashboardComponent } from './clients/clients-dashboard/clients-dashboard.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },{
    path: 'clients', 
    component: ClientsDashboardComponent
  },{
    path: 'client/details/:id',
    component: ClientDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
