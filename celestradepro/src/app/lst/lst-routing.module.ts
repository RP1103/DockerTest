import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LstPage } from './lst.page';

const routes: Routes = [
  {
    path: '',
    component: LstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LstPageRoutingModule {}
