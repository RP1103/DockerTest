import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { CresPageRoutingModule } from './cres-routing.module';

import { CresPage } from './cres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CresPageRoutingModule
  ],
  declarations: [CresPage]
})
export class CresPageModule {} 
