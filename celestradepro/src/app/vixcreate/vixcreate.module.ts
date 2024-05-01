import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { VixcreatePageRoutingModule } from './vixcreate-routing.module';

import { VixcreatePage } from './vixcreate.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    VixcreatePageRoutingModule
  ],
  declarations: [VixcreatePage]
})
export class VixcreatePageModule {}