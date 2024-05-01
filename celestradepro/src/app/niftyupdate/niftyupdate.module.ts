import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NiftyupdatePageRoutingModule } from './niftyupdate-routing.module';

import { NiftyupdatePage } from './niftyupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NiftyupdatePageRoutingModule
  ],
  declarations: [NiftyupdatePage]
})
export class NiftyupdatePageModule {}
