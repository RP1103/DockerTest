import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrePage } from './cre.page';

const routes: Routes = [
  {
    path: '',
    component: CrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrePageRoutingModule {}
