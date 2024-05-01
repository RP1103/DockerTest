import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { EarningPageRoutingModule } from './earning-routing.module';

import { EarningPage } from './earning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    IonicModule,
    EarningPageRoutingModule
  ],
  declarations: [EarningPage]
})
export class EarningPageModule {}
