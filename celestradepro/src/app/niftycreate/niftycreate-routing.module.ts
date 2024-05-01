import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NiftycreatePage } from './niftycreate.page';

const routes: Routes = [
  {
    path: '',
    component: NiftycreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NiftycreatePageRoutingModule {}
