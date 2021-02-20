import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCoursePage } from './modal-course.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCoursePageRoutingModule {}
