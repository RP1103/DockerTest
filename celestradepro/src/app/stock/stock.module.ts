import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockPageRoutingModule } from './stock-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { StockPage } from './stock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    StockPageRoutingModule
  ],
  declarations: [StockPage]
})
export class StockPageModule {}
