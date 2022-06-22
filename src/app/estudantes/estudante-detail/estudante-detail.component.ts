import { Component, Input, OnInit } from '@angular/core';
import { EstudanteService } from '../../shared/estudante.service';
import { Estudante } from './../../shared/estudante';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estudante-detail',
  templateUrl: './estudante-detail.component.html',
  styleUrls: ['./estudante-detail.component.css']
})
export class EstudanteDetailComponent implements OnInit {

  @Input() estudante: Estudante = new Estudante();

  constructor(private estudanteService: EstudanteService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.paramMap.get("id");
    console.log(id);
    if (id) {
      this.getEstudantesId(Number.parseInt(id));
    }

  }

  salvar() {
    this.estudanteService.salvar(this.estudante);
  }

  getEstudantesId(id: number): void {
    this.estudanteService.getEstudantesId(id)
      .subscribe(estudante => this.estudante = estudante);
  }

  deleteEstudantes() {
    if (this.estudante?.id) {
      this.estudanteService.deleteEstudantes(this.estudante?.id);
    }
  }

}
