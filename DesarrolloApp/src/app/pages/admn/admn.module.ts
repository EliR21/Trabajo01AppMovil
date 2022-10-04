import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmnPageRoutingModule } from './admn-routing.module';

import { AdmnPage } from './admn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmnPageRoutingModule
  ],
  declarations: [AdmnPage]
})
export class AdmnPageModule {}
