import { Component, Input, OnInit } from '@angular/core';
import { ProfessorService } from '../../shared/professor.service';
import { ActivatedRoute } from '@angular/router';
import { Professor } from './../../shared/professor';

@Component({
  selector: 'app-professor-detail',
  templateUrl: './professor-detail.component.html',
  styleUrls: ['./professor-detail.component.css']
})
export class ProfessorDetailComponent implements OnInit {

  @Input() professor: Professor = new Professor();

  constructor(private professorService: ProfessorService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.paramMap.get("id");
    console.log(id);
    if (id) {
      this.getProfessorId(Number.parseInt(id));
    }

  }

  salvar() {
    this.professorService.salvar(this.professor);
  }

  getProfessorId(id: number): void {
    console.log(id);

    this.professorService.getProfessorId(id)
      .subscribe(professor => this.professor = professor);
  }

  deleteProfessor() {
    if (this.professor?.id) {
      this.professorService.deleteProfessor(this.professor?.id);
    }
  }

}
