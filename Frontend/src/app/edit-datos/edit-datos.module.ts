import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDatosPageRoutingModule } from './edit-datos-routing.module';

import { EditDatosPage } from './edit-datos.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    EditDatosPageRoutingModule
  ],
  declarations: [EditDatosPage]
})
export class EditDatosPageModule {}
