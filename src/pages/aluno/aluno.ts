import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlunoCompleteDTO } from '../../models/aluno_complete.dto';
import { AlunoService } from '../../services/Aluno.service';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-aluno',
  templateUrl: 'aluno.html',
})
export class AlunoPage {

  alunoComplete: AlunoCompleteDTO;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: StorageService, public alunoService: AlunoService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.alunoService.search(localUser.email)
        .subscribe(response => {
          this.alunoComplete = response;
        }, 
        error => {});
    }
  }
}
