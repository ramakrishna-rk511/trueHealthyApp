import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferandearnPage } from './referandearn.page';

const routes: Routes = [
  {
    path: '',
    component: ReferandearnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferandearnPageRoutingModule {}
