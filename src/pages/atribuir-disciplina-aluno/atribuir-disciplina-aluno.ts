import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlunoDTO } from '../../models/aluno.dto';
import { DisciplinaDTO } from '../../models/disciplina.dto';
import { AlunoService } from '../../services/Aluno.service';
import { DisciplinaService } from '../../services/disciplina.service';

@IonicPage()
@Component({
  selector: 'page-atribuir-disciplina-aluno',
  templateUrl: 'atribuir-disciplina-aluno.html',
})
export class AtribuirDisciplinaAlunoPage {
  
  formGroup: FormGroup;
  alunos: AlunoDTO[];
  disciplinas: DisciplinaDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public formBuilder: FormBuilder,
    public alunoService: AlunoService,
    public disciplinaService: DisciplinaService,
    public alertCtrl: AlertController) {

    this.formGroup = this.formBuilder.group({
      alunoId : [null, [Validators.required]],
      disciplinaId : [null, [Validators.required]]
    }) 
  }

  ionViewDidLoad() {
    this.alunoService.findAll()
      .subscribe(response => {
        this.alunos = response;
        this.formGroup.controls.alunoId.setValue(this.alunos[0].id);
      },
      error => {})

    this.disciplinaService.findAll()
      .subscribe(response => {
        this.disciplinas = response;
        this.formGroup.controls.disciplinaId.setValue(null);
      },
      error => {})  
  }

  atribuir() {
    this.alunoService.insertDisciplinaInAluno(this.formGroup.value)
      .subscribe(response => {
        this.showInsertOk();
      },
      error => {})
  }

  showInsertOk() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Atribuição realizada com sucesso',
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
