import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TilePageRoutingModule } from './tile-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { TilePage } from './tile.page';

import { Ribbon1Component } from './ribbon1/ribbon1.component';
import { ProfileComponent } from './profile/profile.component';
import { ComNewsComponent } from './com-news/com-news.component';
import { CommodityComponent } from './commodity/commodity.component';
import { ComcalenderComponent } from './comcalender/comcalender.component';
import { ComChartComponent } from './com-chart/com-chart.component';
import {MarketheatComponent } from './marketheat/marketheat.component';

@NgModule({
  declarations: [TilePage,
    ComNewsComponent,
      Ribbon1Component,ProfileComponent,CommodityComponent,ComcalenderComponent,ComChartComponent,MarketheatComponent ],



  imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      HttpClientModule,ReactiveFormsModule,
      ExploreContainerComponentModule,
      TilePageRoutingModule,
      Ng2SearchPipeModule,


  ],

})
export class TilePageModule {}
