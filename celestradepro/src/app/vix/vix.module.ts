import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VixPageRoutingModule } from './vix-routing.module';

import { VixPage } from './vix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  
    VixPageRoutingModule
  ],
  declarations: [VixPage]
})
export class VixPageModule {}
