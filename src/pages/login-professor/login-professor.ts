import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

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

  constructor(public navCtrl: NavController, public menu: MenuController, public auth: AuthService, public menuCtrl: MenuController) {
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

  login() {
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.succesfullLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('ProfessorPage');
      },
      error => {})
  }

  voltar() {
    this.navCtrl.setRoot("HomePage");
  }
}
