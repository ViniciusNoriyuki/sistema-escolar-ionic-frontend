import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileProfessorPage } from './profile-professor';

@NgModule({
  declarations: [
    ProfileProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileProfessorPage),
  ],
})
export class ProfileProfessorPageModule {}
