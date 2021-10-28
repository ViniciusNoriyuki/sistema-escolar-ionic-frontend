import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfessorService } from '../../services/professor.service';

@IonicPage()
@Component({
  selector: 'page-cadastrar-professor',
  templateUrl: 'cadastrar-professor.html',
})
export class CadastrarProfessorPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder, 
    public professorService: ProfessorService,
    public alertCtrl: AlertController) {
    
    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    }) 
  }

  signupProfessor() {
    this.professorService.insert(this.formGroup.value)
      .subscribe(response => {
        this.showInsertOk();
      },
      error => {})
  }

  showInsertOk() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Cadastro efetuado com sucesso',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot('ProfessorPage');
          }
        }
      ]
    });
    alert.present();
  }
}
