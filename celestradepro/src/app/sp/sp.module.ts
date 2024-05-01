import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpPageRoutingModule } from './sp-routing.module';

import { SpPage } from './sp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpPageRoutingModule
  ],
  declarations: [SpPage]
})
export class SpPageModule {}
