import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tile1PageRoutingModule } from './tile1-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { Tile1Page } from './tile1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tile1PageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [Tile1Page]
})
export class Tile1PageModule {}
