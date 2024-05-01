import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrtPageRoutingModule } from './crt-routing.module';

import { CrtPage } from './crt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CrtPageRoutingModule
  ],
  declarations: [CrtPage]
})
export class CrtPageModule {}
