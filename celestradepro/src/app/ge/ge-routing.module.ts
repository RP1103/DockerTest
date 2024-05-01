import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GEPage } from './ge.page';

const routes: Routes = [
  {
    path: '',
    component: GEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GEPageRoutingModule {}
