import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { OptionPageRoutingModule } from './option-routing.module';

import { OptionPage } from './option.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionPageRoutingModule,Ng2SearchPipeModule
  ],
  declarations: [OptionPage]
})
export class OptionPageModule {}
