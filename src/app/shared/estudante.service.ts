import { Estudante } from './estudante';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getEstudantes(): Observable<any> {
    return this.http.get("http://localhost:3000/estudantes");
  }

  getEstudantesId(id: number): Observable<any> {
    return this.http.get("http://localhost:3000/estudantes/" + id);
  }

  deleteEstudantes(id?: number) {
    this.http.delete("http://localhost:3000/estudantes/" + id)
      .subscribe((response) => {
        window.location.reload();
      });
  }

  salvar(estudante: Estudante) {
    if(estudante.id)
    {
      this.atualizar(estudante);
    }
    else{
      this.criar(estudante);
    }
  }

  criar(estudante: Estudante){
    let json = JSON.parse(JSON.stringify(estudante));

    this.http.post("http://localhost:3000/estudantes", json)
    .subscribe(() => {
      window.location.href = "/estudantes";
    });
  }

  atualizar(estudante: Estudante){
    let json = JSON.parse(JSON.stringify(estudante));

    this.http.put("http://localhost:3000/estudantes/" + estudante.id, json)
    .subscribe(() => {
      window.location.href = "/estudantes";
    });
  }
}
