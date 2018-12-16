import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoctationPage } from './loctation';

@NgModule({
  declarations: [
    LoctationPage,
  ],
  imports: [
    IonicPageModule.forChild(LoctationPage),
  ],
})
export class LoctationPageModule {}
