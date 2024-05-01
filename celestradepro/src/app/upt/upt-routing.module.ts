import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UptPage } from './upt.page';

const routes: Routes = [
  {
    path: '',
    component: UptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UptPageRoutingModule {}
