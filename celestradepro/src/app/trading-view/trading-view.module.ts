import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradingViewPageRoutingModule } from './trading-view-routing.module';

import { TradingViewPage } from './trading-view.page';


@NgModule({
    declarations: [TradingViewPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TradingViewPageRoutingModule

    ]
})
export class TradingViewPageModule {}
