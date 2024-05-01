import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WidgetPage } from './widget.page';

const routes: Routes = [
  {
    path: '',
    component: WidgetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidgetPageRoutingModule {}
