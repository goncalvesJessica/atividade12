import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstudantesComponent } from './estudantes/estudantes.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [
  { path: '', component: EstudantesComponent },
  { path: 'estudantes/:id', component: EstudantesComponent },
  { path: 'estudantes', component: EstudantesComponent },
  { path: 'professores', component: ProfessoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
