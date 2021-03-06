import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'HomePage';

  pages: Array<{title: string, component: string}>;
  pagesProfessor: Array<{title: string, component: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public auth: AuthService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Principal', component: 'HomePage' },
      { title: 'Perfil', component: 'ProfilePage' },
      { title: 'Sair', component: '' }
    ];

    this.pagesProfessor = [
      { title: 'Principal', component: 'ProfessorPage' },
      { title: 'Cadastrar aluno', component: 'CadastrarAlunoPage' },
      { title: 'Cadastrar professor', component: 'CadastrarProfessorPage' },
      { title: 'Cadastrar disciplina', component: 'CadastrarDisciplinaPage' },
      { title: 'Atribuir disciplina a professor', component: 'AtribuirDisciplinaProfessorPage' },
      { title: 'Atribuir disciplina a aluno', component: 'AtribuirDisciplinaAlunoPage' },
      { title: 'Lançar notas', component: 'LancarNotasPage' },
      { title: 'Perfil', component: 'ProfileProfessorPage' },
      { title: 'Sair', component: '' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page : {title:string, component:string}) {
  
    switch (page.title) {
      case 'Sair':
        this.auth.logout();
        this.nav.setRoot('HomePage');
        break;
      default:
        this.nav.setRoot(page.component);
    }
  }
}
