import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VixcreatePage } from './vixcreate.page';

const routes: Routes = [
  {
    path: '',
    component: VixcreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VixcreatePageRoutingModule {}
