import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenintrestPage } from './openintrest.page';

const routes: Routes = [
  {
    path: '',
    component: OpenintrestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenintrestPageRoutingModule {}
