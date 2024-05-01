import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RibonPage } from './ribon.page';



const routes: Routes = [
  {
    path: '',
    component: RibonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RibonPageRoutingModule {}
