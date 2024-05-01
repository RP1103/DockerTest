import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForexPage } from './forex.page';

const routes: Routes = [
  {
    path: '',
    component: ForexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForexPageRoutingModule {}
