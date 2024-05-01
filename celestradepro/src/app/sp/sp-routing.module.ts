import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpPage } from './sp.page';

const routes: Routes = [
  {
    path: '',
    component: SpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpPageRoutingModule {}
