import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardlandingComponent } from './dashboardlanding.component';
import { HomeComponent } from './pages/home/home.component';
import { StockListComponent } from './pages/stock-list/stock-list.component';

const routes: Routes = [
  {path:'',component:DashboardlandingComponent, 
children: [
  {path:'',component: HomeComponent},
  {path:'stockList', component:StockListComponent},
  {path:'Home',component:HomeComponent}
]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DasboardRoutingModule { }
