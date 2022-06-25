import { Professor } from './professor';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getProfessores(): Observable<any> {
    return this.http.get("http://localhost:3000/professores");
  }
  getProfessorId(id: number): Observable<any> {
    return this.http.get("http://localhost:3000/professores/" + id);
  }

  deleteProfessor(id?: number) {
    this.http.delete("http://localhost:3000/professores/" + id)
      .subscribe((response) => {
        window.location.reload();
      });
  }

  salvar(professor: Professor) {
    if(professor.id)
    {
      this.atualizar(professor);
    }
    else{
      this.criar(professor);
    }
  }

  criar(professor: Professor){
    let json = JSON.parse(JSON.stringify(Professor));

    this.http.post("http://localhost:3000/professores", json)
    .subscribe(() => {
      window.location.href = "/professor";
    });
  }

  atualizar(professor: Professor){
    let json = JSON.parse(JSON.stringify(professor));

    this.http.put("http://localhost:3000/professores/" + professor.id, json)
    .subscribe(() => {
      window.location.href = "/professor";
    });
  }
}
