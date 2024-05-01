import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { UptPageRoutingModule } from './upt-routing.module';

import { UptPage } from './upt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UptPageRoutingModule
  ],
  declarations: [UptPage]
})
export class UptPageModule {}
