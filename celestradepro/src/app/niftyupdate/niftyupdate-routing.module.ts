import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NiftyupdatePage } from './niftyupdate.page';

const routes: Routes = [
  {
    path: '',
    component: NiftyupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NiftyupdatePageRoutingModule {}
