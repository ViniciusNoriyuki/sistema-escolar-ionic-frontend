import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AlunoService } from '../../services/Aluno.service';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController, 
    public auth: AuthService, 
    public menuCtrl: MenuController, 
    public alunoService: AlunoService, 
    public storage: StorageService) {
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
    this.enableAuthenticatedMenu();
  }

  enableAuthenticatedMenu() {
    this.menuCtrl.enable(true, 'authenticated');
    this.menuCtrl.enable(false, 'unauthenticated');
  }

  ionViewDidEnter() {
    this.auth.refreshToken()
      .subscribe(response => {
        this.auth.succesfullLogin(response.headers.get('Authorization'));
        this.alunoService.findByEmail(this.storage.getLocalUser().email)
        .subscribe(() => {
          this.navCtrl.setRoot('AlunoPage');
        },
        error => {})
      },
      error => {})
  }

  login() {
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.succesfullLogin(response.headers.get('Authorization'));
        this.alunoService.findByEmail(this.creds.email)
          .subscribe(() => {
            this.navCtrl.setRoot('AlunoPage');
          },
          error => {})
      },
      error => {})
  }

  loginProfessorPage() {
    this.navCtrl.setRoot('LoginProfessorPage')
  }
}
