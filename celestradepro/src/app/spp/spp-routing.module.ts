import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SppPage } from './spp.page';

const routes: Routes = [
  {
    path: '',
    component: SppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SppPageRoutingModule {}
