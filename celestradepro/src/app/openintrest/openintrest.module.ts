import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenintrestPageRoutingModule } from './openintrest-routing.module';

import { OpenintrestPage } from './openintrest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenintrestPageRoutingModule
  ],
  declarations: [OpenintrestPage]
})
export class OpenintrestPageModule {}
