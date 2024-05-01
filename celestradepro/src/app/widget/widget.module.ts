import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WidgetPageRoutingModule } from './widget-routing.module';

import { WidgetPage } from './widget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WidgetPageRoutingModule
  ],
  declarations: [WidgetPage]
})
export class WidgetPageModule {}
