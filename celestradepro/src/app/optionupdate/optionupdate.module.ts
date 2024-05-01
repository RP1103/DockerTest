import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionupdatePageRoutingModule } from './optionupdate-routing.module';

import { OptionupdatePage } from './optionupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionupdatePageRoutingModule
  ],
  declarations: [OptionupdatePage]
})
export class OptionupdatePageModule {}
