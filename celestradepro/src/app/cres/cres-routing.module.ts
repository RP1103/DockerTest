import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CresPage } from './cres.page';

const routes: Routes = [
  {
    path: '',
    component: CresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CresPageRoutingModule {}
