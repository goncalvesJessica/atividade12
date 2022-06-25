import { Professor } from './../shared/professor';
import { MessageService } from './../shared/message.service';
import { ProfessorService } from './../shared/professor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})

export class ProfessoresComponent implements OnInit {

  professores: Professor[] = [];

  constructor(private professorService: ProfessorService) { }

  ngOnInit(): void {
    this.getProfessores();
  }

  getProfessores(): void {
    this.professorService.getProfessores()
      .subscribe(professores => this.professores = professores);
  }

}
