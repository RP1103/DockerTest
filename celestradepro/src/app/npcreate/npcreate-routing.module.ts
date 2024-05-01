import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NpcreatePage } from './npcreate.page';

const routes: Routes = [
  {
    path: '',
    component: NpcreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpcreatePageRoutingModule {}
