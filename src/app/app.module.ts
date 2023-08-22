import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//External
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";

//Alunos
import { AlunosComponent } from './components/alunos/alunos.component';
import { ProfessoresAlunosComponent } from './components/alunos/professores-alunos/professores-alunos.component';

//Dashboard
import { DashboardComponent } from './components/dashboard/dashboard.component';

//Perfil
import { PerfilComponent } from './components/perfil/perfil.component';


//Professores
import { ProfessoresComponent } from './components/professores/professores.component'
import { AlunosProfessoresComponent } from './components/professores/alunos-professores/alunos-professores.component';
import { ProfessorDetalheComponent } from './components/professores/professor-detalhe/professor-detalhe.component';


//NAV
import { NavComponent } from './components/shared/nav/nav.component';
import { TituloComponent } from './components/shared/titulo/titulo.component';



@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    ProfessoresAlunosComponent,
    DashboardComponent,
    PerfilComponent,
    ProfessoresComponent,
    AlunosProfessoresComponent,
    ProfessorDetalheComponent,
    NavComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      closeButton: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
