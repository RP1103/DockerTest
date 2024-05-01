import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule  } from '@ionic/angular';

import { ForexUpdatePageRoutingModule } from './forex-update-routing.module';

import { ForexUpdatePage } from './forex-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ForexUpdatePageRoutingModule
  ],
  declarations: [ForexUpdatePage]
})
export class ForexUpdatePageModule {}
