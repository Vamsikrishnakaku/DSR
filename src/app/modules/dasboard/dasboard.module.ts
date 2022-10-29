import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DasboardRoutingModule } from './dasboard-routing.module';
import { StockListComponent } from './pages/stock-list/stock-list.component';
import { AddEditStockComponent } from './pages/add-edit-stock/add-edit-stock.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';


@NgModule({
  declarations: [
    StockListComponent,
    AddEditStockComponent,
    HomeComponent,
    ContactusComponent
  ],
  imports: [
    CommonModule,
    DasboardRoutingModule,SharedModule
  ]
})
export class DasboardModule { }
