import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EconomicPage } from './economic.page';

const routes: Routes = [
  {
    path: '',
    component: EconomicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EconomicPageRoutingModule {}
