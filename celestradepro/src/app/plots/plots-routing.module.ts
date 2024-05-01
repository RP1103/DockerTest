import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlotsPage } from './plots.page';

const routes: Routes = [
  {
    path: '',
    component: PlotsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlotsPageRoutingModule {}
