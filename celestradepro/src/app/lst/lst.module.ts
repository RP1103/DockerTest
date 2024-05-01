import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LstPageRoutingModule } from './lst-routing.module';

import { LstPage } from './lst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LstPageRoutingModule
  ],
  declarations: [LstPage]
})
export class LstPageModule {}
