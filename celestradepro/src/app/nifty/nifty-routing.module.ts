import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NiftyPage } from './nifty.page';

const routes: Routes = [
  {
    path: '',
    component: NiftyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NiftyPageRoutingModule {}
