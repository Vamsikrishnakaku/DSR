import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layouts/login/login.component';

const routes: Routes = [
{path: '',component:LoginComponent},
{path:'StockModule',loadChildren:() => import('./modules/dasboard/dasboard.module').then(m => m.DasboardModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
