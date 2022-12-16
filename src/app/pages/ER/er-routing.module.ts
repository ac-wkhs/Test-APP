import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ER } from './er.page';

const routes: Routes = [
  {
    path: '',
    component: ER,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ERRoutingModule {}
