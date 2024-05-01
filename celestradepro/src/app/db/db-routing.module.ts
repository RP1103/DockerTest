import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbPage } from './db.page';

const routes: Routes = [
  {
    path: '',
    component: DbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DbPageRoutingModule {}
