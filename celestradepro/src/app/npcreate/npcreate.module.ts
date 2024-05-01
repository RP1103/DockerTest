import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NpcreatePageRoutingModule } from './npcreate-routing.module';

import { NpcreatePage } from './npcreate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NpcreatePageRoutingModule
  ],
  declarations: [NpcreatePage]
})
export class NpcreatePageModule {}
