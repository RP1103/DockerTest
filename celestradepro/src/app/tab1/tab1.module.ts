import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
PlotlyModule.plotlyjs = PlotlyJS;

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ChartsComponent } from './charts/charts.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { Chart1Component } from './chart1/chart1.component';
import { EarningComponent } from './earning/earning.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ProfileComponent } from './profile/profile.component';
import { MetricsComponent } from './metrics/metrics.component';
import { MultichartComponent } from './multichart/multichart.component';
import { WidgetchartComponent } from './widgetchart/widgetchart.component';
@NgModule({
    declarations: [Tab1Page, ChartsComponent, RibbonComponent, Chart1Component, EarningComponent,
        AnalysisComponent, ProfileComponent, MetricsComponent,MultichartComponent,WidgetchartComponent ],
    /*exports: [
        RibbonComponent,
    ],*/
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        PlotlyModule,
        ReactiveFormsModule,
        ExploreContainerComponentModule,
        Tab1PageRoutingModule,
        Ng2SearchPipeModule,
        HttpClientModule

    ]
})
export class Tab1PageModule {}
