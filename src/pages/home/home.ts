import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

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

  constructor(public navCtrl: NavController, public menu: MenuController, public auth: AuthService, public menuCtrl: MenuController) {
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

  login() {
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.succesfullLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('AlunoPage');
      },
      error => {})
  }

  loginProfessorPage() {
    this.navCtrl.setRoot('LoginProfessorPage')
  }
}
