import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { UpdPageRoutingModule } from './upd-routing.module';

import { UpdPage } from './upd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpdPageRoutingModule
  ],
  declarations: [UpdPage]
})
export class UpdPageModule {}
