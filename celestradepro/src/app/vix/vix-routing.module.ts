import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VixPage } from './vix.page';

const routes: Routes = [
  {
    path: '',
    component: VixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VixPageRoutingModule {}
