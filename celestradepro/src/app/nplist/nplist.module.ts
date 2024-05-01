import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NplistPageRoutingModule } from './nplist-routing.module';

import { NplistPage } from './nplist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NplistPageRoutingModule
  ],
  declarations: [NplistPage]
})
export class NplistPageModule {}
