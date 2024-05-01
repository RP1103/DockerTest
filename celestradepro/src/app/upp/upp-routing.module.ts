import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UppPage } from './upp.page';

const routes: Routes = [
  {
    path: '',
    component: UppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UppPageRoutingModule {}
