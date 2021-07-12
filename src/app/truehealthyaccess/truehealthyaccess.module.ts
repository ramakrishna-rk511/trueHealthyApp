import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TruehealthyaccessPageRoutingModule } from './truehealthyaccess-routing.module';

import { TruehealthyaccessPage } from './truehealthyaccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TruehealthyaccessPageRoutingModule
  ],
  declarations: [TruehealthyaccessPage]
})
export class TruehealthyaccessPageModule {}
