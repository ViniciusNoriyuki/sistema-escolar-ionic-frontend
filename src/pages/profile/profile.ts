import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlunoDTO } from '../../models/aluno.dto';
import { AlunoService } from '../../services/Aluno.service';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  aluno: AlunoDTO;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: StorageService, public alunoService: AlunoService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.alunoService.findByEmail(localUser.email)
        .subscribe(response => {
          this.aluno = response;
        }, 
        error => {});
    }
  }

}
