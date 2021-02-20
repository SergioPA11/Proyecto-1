import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSchoolPageRoutingModule } from './modal-school-routing.module';

import { ModalSchoolPage } from './modal-school.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalSchoolPageRoutingModule
  ],
  declarations: [ModalSchoolPage]
})
export class ModalSchoolPageModule {}
