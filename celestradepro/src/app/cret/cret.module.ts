import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CretPageRoutingModule } from './cret-routing.module';

import { CretPage } from './cret.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CretPageRoutingModule
  ],
  declarations: [CretPage]
})
export class CretPageModule {}
