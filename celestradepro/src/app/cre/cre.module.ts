import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CrePageRoutingModule } from './cre-routing.module';

import { CrePage } from './cre.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CrePageRoutingModule
  ],
  declarations: [CrePage]
})
export class CrePageModule {}
