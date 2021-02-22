import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsNavigatorPageRoutingModule } from './tabs-navigator-routing.module';

import { TabsNavigatorPage } from './tabs-navigator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsNavigatorPageRoutingModule
  ],
  declarations: [TabsNavigatorPage]
})
export class TabsNavigatorPageModule {}
