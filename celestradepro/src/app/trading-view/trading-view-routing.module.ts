import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradingViewPage } from './trading-view.page';

const routes: Routes = [
  {
    path: '',
    component: TradingViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradingViewPageRoutingModule {}
