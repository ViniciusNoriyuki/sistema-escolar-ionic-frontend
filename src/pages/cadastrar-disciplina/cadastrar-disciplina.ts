import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisciplinaService } from '../../services/disciplina.service';

@IonicPage()
@Component({
  selector: 'page-cadastrar-disciplina',
  templateUrl: 'cadastrar-disciplina.html',
})
export class CadastrarDisciplinaPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public formBuilder: FormBuilder, 
    public disciplinaService: DisciplinaService,
    public alertCtrl: AlertController) {
    
    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]]
    }) 
  }
  
  singupDisciplina() {
    this.disciplinaService.insert(this.formGroup.value)
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
