import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { VpPageRoutingModule } from './vp-routing.module';

import { VpPage } from './vp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    VpPageRoutingModule
  ],
  declarations: [VpPage]
})
export class VpPageModule {}
