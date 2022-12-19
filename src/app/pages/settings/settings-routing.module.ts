import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Settings } from './settings.page';
import { Account } from './settings.page'

const routes: Routes = [
  {
    path: '',
    component: Settings,
  },
  {
    path: '',
    component: Account,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
