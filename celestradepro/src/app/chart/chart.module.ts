import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartPageRoutingModule } from './chart-routing.module';

import { ChartPage } from './chart.page';

import { HighchartsChartModule } from 'highcharts-angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartPageRoutingModule,
    HighchartsChartModule
  ],
  exports:[
ChartPage
  ],
  declarations: [ChartPage]
})
export class ChartPageModule {}
