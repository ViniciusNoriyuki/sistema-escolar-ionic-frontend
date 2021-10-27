import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';
import { ProfessorService } from '../../services/professor.service';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-login-professor',
  templateUrl: 'login-professor.html',
})
export class LoginProfessorPage {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController, 
    public auth: AuthService, 
    public menuCtrl: MenuController, 
    public professorService: ProfessorService,
    public storage: StorageService) {
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
    this.disableAuthenticatedMenu();  
  }

  disableAuthenticatedMenu() {
    this.menuCtrl.enable(false, 'authenticated');
    this.menuCtrl.enable(true, 'unauthenticated');
  }

  ionViewDidEnter() {
    this.auth.refreshToken()
      .subscribe(response => {
        this.auth.succesfullLogin(response.headers.get('Authorization'));
        this.professorService.findByEmail(this.storage.getLocalUser().email)
        .subscribe(() => {
          this.navCtrl.setRoot('ProfessorPage');
        },
        error => {})
      },
      error => {})
  }

  login() {
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.succesfullLogin(response.headers.get('Authorization'));
        this.professorService.findByEmail(this.creds.email)
          .subscribe(() => {
            this.navCtrl.setRoot('ProfessorPage');
          },
          error => {})
      },
      error => {})
  }

  voltar() {
    this.navCtrl.setRoot("HomePage");
  }
}
