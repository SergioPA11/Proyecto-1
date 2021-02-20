import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCoursePageRoutingModule } from './modal-course-routing.module';

import { ModalCoursePage } from './modal-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalCoursePageRoutingModule
  ],
  declarations: [ModalCoursePage]
})
export class ModalCoursePageModule {}
