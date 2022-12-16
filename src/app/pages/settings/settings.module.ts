import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Settings } from './settings.page';

import { SettingsRoutingModule } from './settings1.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsRoutingModule
  ],
  declarations: [Settings]
})
export class ERModule {}
