import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpsPage } from './ups.page';

const routes: Routes = [
  {
    path: '',
    component: UpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpsPageRoutingModule {}
