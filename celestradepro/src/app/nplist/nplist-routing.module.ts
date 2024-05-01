import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NplistPage } from './nplist.page';

const routes: Routes = [
  {
    path: '',
    component: NplistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NplistPageRoutingModule {}
