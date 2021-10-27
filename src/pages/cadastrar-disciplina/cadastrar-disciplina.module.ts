import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarDisciplinaPage } from './cadastrar-disciplina';

@NgModule({
  declarations: [
    CadastrarDisciplinaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarDisciplinaPage),
  ],
})
export class CadastrarDisciplinaPageModule {}
