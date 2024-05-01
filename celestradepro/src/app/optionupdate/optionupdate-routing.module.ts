import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionupdatePage } from './optionupdate.page';

const routes: Routes = [
  {
    path: '',
    component: OptionupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionupdatePageRoutingModule {}
