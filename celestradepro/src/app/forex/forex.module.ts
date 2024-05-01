import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForexPageRoutingModule } from './forex-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ForexPage } from './forex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    ForexPageRoutingModule
  ],
  declarations: [ForexPage]
})
export class ForexPageModule {}
