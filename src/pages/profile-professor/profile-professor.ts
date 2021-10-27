import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfessorDTO } from '../../models/professor.dto';
import { ProfessorService } from '../../services/professor.service';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-profile-professor',
  templateUrl: 'profile-professor.html',
})
export class ProfileProfessorPage {

  professor: ProfessorDTO;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: StorageService, public professorService: ProfessorService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.professorService.findByEmail(localUser.email)
      .subscribe(response => {
        this.professor = response;
      }, 
      error => {});    
    }  
  }

}
