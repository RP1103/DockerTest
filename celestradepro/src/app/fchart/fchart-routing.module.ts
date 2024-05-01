import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FchartPage } from './fchart.page';

const routes: Routes = [
  {
    path: '',
    component: FchartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FchartPageRoutingModule {}
