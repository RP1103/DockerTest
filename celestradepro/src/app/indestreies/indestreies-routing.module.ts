import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndestreiesPage } from './indestreies.page';

const routes: Routes = [
  {
    path: '',
    component: IndestreiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndestreiesPageRoutingModule {}
