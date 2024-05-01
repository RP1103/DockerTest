import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrtPage } from './crt.page';

const routes: Routes = [
  {
    path: '',
    component: CrtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrtPageRoutingModule {}
