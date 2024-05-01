import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DbPageRoutingModule } from './db-routing.module';

import { DbPage } from './db.page';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DbPageRoutingModule,
    HttpClientModule
  ],
  declarations: [DbPage]
})
export class DbPageModule {}
