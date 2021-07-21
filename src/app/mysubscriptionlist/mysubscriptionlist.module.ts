import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MysubscriptionlistPageRoutingModule } from './mysubscriptionlist-routing.module';

import { MysubscriptionlistPage } from './mysubscriptionlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MysubscriptionlistPageRoutingModule
  ],
  declarations: [MysubscriptionlistPage]
})
export class MysubscriptionlistPageModule {}
