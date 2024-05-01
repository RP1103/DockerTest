import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import * as PlotlyJS from 'plotly.js/dist/plotly.js';
// import { PlotlyModule } from 'angular-plotly.js';

// PlotlyModule.plotlyjs = PlotlyJS;

import { PlotsPageRoutingModule } from './plots-routing.module';

import { PlotsPage } from './plots.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  //  PlotlyModule,
    PlotsPageRoutingModule
  ],
  declarations: [PlotsPage]
})
export class PlotsPageModule {}
