import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Option1Page } from './option1.page';

const routes: Routes = [
  {
    path: '',
    component: Option1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Option1PageRoutingModule {}
