import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tile1Page } from './tile1.page';

const routes: Routes = [
  {
    path: '',
    component: Tile1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tile1PageRoutingModule {}
