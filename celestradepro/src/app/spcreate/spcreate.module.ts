import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpcreatePageRoutingModule } from './spcreate-routing.module';

import { SpcreatePage } from './spcreate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, 
    SpcreatePageRoutingModule
  ],
  declarations: [SpcreatePage]
})
export class SpcreatePageModule {}
