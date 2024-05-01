import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CretPage } from './cret.page';

const routes: Routes = [
  {
    path: '',
    component: CretPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CretPageRoutingModule {}
