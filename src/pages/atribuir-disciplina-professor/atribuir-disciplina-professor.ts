import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisciplinaDTO } from '../../models/disciplina.dto';
import { ProfessorDTO } from '../../models/professor.dto';
import { DisciplinaService } from '../../services/disciplina.service';
import { ProfessorService } from '../../services/professor.service';

@IonicPage()
@Component({
  selector: 'page-atribuir-disciplina-professor',
  templateUrl: 'atribuir-disciplina-professor.html',
})
export class AtribuirDisciplinaProfessorPage {

  formGroup: FormGroup;
  professores: ProfessorDTO[];
  disciplinas: DisciplinaDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public professorService: ProfessorService, 
    public formBuilder: FormBuilder,
    public disciplinaService: DisciplinaService) {

    this.formGroup = this.formBuilder.group({
      professorId : [null, [Validators.required]],
      disciplinaId : [null, [Validators.required]]
    }) 
  }

  ionViewDidLoad() {
    this.professorService.findAll()
      .subscribe(response => {
        this.professores = response;
        this.formGroup.controls.professorId.setValue(this.professores[0].id);
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
    console.log("Atribuiu");
  }
}
