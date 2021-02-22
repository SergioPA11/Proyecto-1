import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsNavigatorPage } from './tabs-navigator.page';

const routes: Routes = [
  {
    path: '',
    component: TabsNavigatorPage,
    children: [
      {
        path: 'menu',
        loadChildren: () => import('../menu/menu.module').then( m => m.MenuPageModule)
      },
      {
        path: 'datos',
        loadChildren: () => import('../datos/datos.module').then( m => m.DatosPageModule)
      },
      {
        path: 'map',
        loadChildren: () => import('../map/map.module').then( m => m.MapPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsNavigatorPageRoutingModule {}
