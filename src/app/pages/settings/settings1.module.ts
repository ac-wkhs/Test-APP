import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Settings } from './settings.page';
import { Account } from './settings.page'

const routes: Routes = [
  {
    path: '/settings',
    component: Settings,
  },
  {
    path: '/account',
    component: Account,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
