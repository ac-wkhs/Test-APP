import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { QC } from './qc.page';

import { QCRoutingModule } from './qc-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QCRoutingModule
  ],
  declarations: [QC]
})
export class QCModule {}
