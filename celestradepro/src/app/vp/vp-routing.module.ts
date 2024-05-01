import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VpPage } from './vp.page';

const routes: Routes = [
  {
    path: '',
    component: VpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VpPageRoutingModule {}
