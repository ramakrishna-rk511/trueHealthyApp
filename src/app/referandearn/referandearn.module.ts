import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferandearnPageRoutingModule } from './referandearn-routing.module';

import { ReferandearnPage } from './referandearn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferandearnPageRoutingModule
  ],
  declarations: [ReferandearnPage]
})
export class ReferandearnPageModule {}
