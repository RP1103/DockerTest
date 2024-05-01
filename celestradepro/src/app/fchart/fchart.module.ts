import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FchartPageRoutingModule } from './fchart-routing.module';

import { FchartPage } from './fchart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FchartPageRoutingModule
  ],
  declarations: [FchartPage]
})
export class FchartPageModule {}
