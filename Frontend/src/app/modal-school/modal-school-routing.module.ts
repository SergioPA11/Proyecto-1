import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSchoolPage } from './modal-school.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSchoolPageRoutingModule {}
