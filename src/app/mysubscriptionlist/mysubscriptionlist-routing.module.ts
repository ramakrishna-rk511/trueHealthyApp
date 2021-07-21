import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MysubscriptionlistPage } from './mysubscriptionlist.page';

const routes: Routes = [
  {
    path: '',
    component: MysubscriptionlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MysubscriptionlistPageRoutingModule {}
