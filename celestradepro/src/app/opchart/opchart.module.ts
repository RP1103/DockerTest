import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpchartPageRoutingModule } from './opchart-routing.module';

import { OpchartPage } from './opchart.page';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  imports: [
    HighchartsChartModule,
    CommonModule,
    FormsModule,
    IonicModule,
    OpchartPageRoutingModule
  ],
  declarations: [OpchartPage]
})
export class OpchartPageModule {}
