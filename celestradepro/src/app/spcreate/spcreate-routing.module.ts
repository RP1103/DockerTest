import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpcreatePage } from './spcreate.page';

const routes: Routes = [
  {
    path: '',
    component: SpcreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpcreatePageRoutingModule {}
