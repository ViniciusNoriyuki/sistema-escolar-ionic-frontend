import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlunoDTO } from '../../models/aluno.dto';
import { DisciplinaDTO } from '../../models/disciplina.dto';
import { AlunoService } from '../../services/Aluno.service';
import { DisciplinaService } from '../../services/disciplina.service';
import { NotaService } from '../../services/nota.service';

@IonicPage()
@Component({
  selector: 'page-lancar-notas',
  templateUrl: 'lancar-notas.html',
})
export class LancarNotasPage {

  formGroup: FormGroup;
  alunos: AlunoDTO[];
  disciplinas: DisciplinaDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alunoService: AlunoService,
    public disciplinaService: DisciplinaService,
    public notaService: NotaService,
    public alertCtrl: AlertController) {

    this.formGroup = this.formBuilder.group({
      valor: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
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

  lancar() {
    this.notaService.insert(this.formGroup.value)
      .subscribe(response => {
        this.showInsertOk();
      },
      error => {})
  }

  showInsertOk() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Nota lançada com sucesso',
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
