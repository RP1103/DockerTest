import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GEPageRoutingModule } from './ge-routing.module';

import { GEPage } from './ge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GEPageRoutingModule
  ],
  declarations: [GEPage]
})
export class GEPageModule {}
