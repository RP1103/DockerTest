import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Option1PageRoutingModule } from './option1-routing.module';

import { Option1Page } from './option1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Option1PageRoutingModule
  ],
  declarations: [Option1Page]
})
export class Option1PageModule {}
