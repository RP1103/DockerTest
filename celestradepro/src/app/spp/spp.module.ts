import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { SppPageRoutingModule } from './spp-routing.module';

import { SppPage } from './spp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SppPageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [SppPage]
})
export class SppPageModule {}
