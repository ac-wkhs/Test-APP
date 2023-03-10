import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'qc',
    loadChildren: () => import('./pages/quickCare/qc.module').then( m => m.QCModule)
  },
  {
    path: 'er',
    loadChildren: () => import('./pages/ER/er.module').then( m => m.ERModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
