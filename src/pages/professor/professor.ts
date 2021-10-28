import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlunoDTO } from '../../models/aluno.dto';
import { ProfessorDTO } from '../../models/professor.dto';
import { DisciplinaService } from '../../services/disciplina.service';
import { ProfessorService } from '../../services/professor.service';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-professor',
  templateUrl: 'professor.html',
})
export class ProfessorPage {

  professor: ProfessorDTO;
  alunos: AlunoDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: StorageService, 
    public professorService: ProfessorService,
    public disciplinaService: DisciplinaService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.professorService.findByEmail(localUser.email)
        .subscribe(response => {
          this.professor = response;
          this.disciplinaService.findAlunos(this.professor.disciplina.id)
            .subscribe(response => {
              this.alunos = response;
            })
        }, 
        error => {});
    }
  }
}
