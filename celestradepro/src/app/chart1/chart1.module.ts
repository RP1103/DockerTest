import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chart1PageRoutingModule } from './chart1-routing.module';

import { Chart1Page } from './chart1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chart1PageRoutingModule
  ],
  declarations: [Chart1Page]
})
export class Chart1PageModule {}
