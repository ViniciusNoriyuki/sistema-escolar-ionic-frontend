import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastrar-aluno',
  templateUrl: 'cadastrar-aluno.html',
})
export class CadastrarAlunoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  singupAluno() {
    console.log("Enviou o form");
  }

}
