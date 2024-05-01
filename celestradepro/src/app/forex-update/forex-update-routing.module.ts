import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForexUpdatePage } from './forex-update.page';

const routes: Routes = [
  {
    path: '',
    component: ForexUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForexUpdatePageRoutingModule {}
