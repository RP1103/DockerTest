import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HighchartsChartModule } from 'highcharts-angular';


import { EconomicPageRoutingModule } from './economic-routing.module';

import { EconomicPage } from './economic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HighchartsChartModule ,
    Ng2SearchPipeModule,
    EconomicPageRoutingModule
  ],
  declarations: [EconomicPage]
})
export class EconomicPageModule {}
