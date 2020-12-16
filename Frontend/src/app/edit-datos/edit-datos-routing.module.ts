import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDatosPage } from './edit-datos.page';

const routes: Routes = [
  {
    path: '',
    component: EditDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDatosPageRoutingModule {}
