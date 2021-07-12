import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TruehealthyaccessPage } from './truehealthyaccess.page';

const routes: Routes = [
  {
    path: '',
    component: TruehealthyaccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TruehealthyaccessPageRoutingModule {}
