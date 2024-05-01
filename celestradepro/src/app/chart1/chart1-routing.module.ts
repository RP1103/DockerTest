import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chart1Page } from './chart1.page';

const routes: Routes = [
  {
    path: '',
    component: Chart1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chart1PageRoutingModule {}
