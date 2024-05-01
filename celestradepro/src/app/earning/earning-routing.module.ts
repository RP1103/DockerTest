import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarningPage } from './earning.page';

const routes: Routes = [
  {
    path: '',
    component: EarningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarningPageRoutingModule {}
