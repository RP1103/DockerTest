import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NiftylistPageRoutingModule } from './niftylist-routing.module';

import { NiftylistPage } from './niftylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NiftylistPageRoutingModule
  ],
  declarations: [NiftylistPage]
})
export class NiftylistPageModule {}
