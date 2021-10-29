import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LancarNotasPage } from './lancar-notas';

@NgModule({
  declarations: [
    LancarNotasPage,
  ],
  imports: [
    IonicPageModule.forChild(LancarNotasPage),
  ],
})
export class LancarNotasPageModule {}
