import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdPage } from './upd.page';

const routes: Routes = [
  {
    path: '',
    component: UpdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdPageRoutingModule {}
