import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NiftyPageRoutingModule } from './nifty-routing.module';

import { NiftyPage } from './nifty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NiftyPageRoutingModule
  ],
  declarations: [NiftyPage]
})
export class NiftyPageModule {}
