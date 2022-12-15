import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QC } from './qc.page';

const routes: Routes = [
  {
    path: '',
    component: QC,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QCRoutingModule {}
