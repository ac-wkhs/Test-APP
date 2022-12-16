import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ER } from './er.page';

import { ERRoutingModule } from './er-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ERRoutingModule
  ],
  declarations: [ER]
})
export class ERModule {}
