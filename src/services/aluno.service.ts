import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../config/api.config";
import { AlunoDTO } from "../models/aluno.dto";
import { AlunoCompleteDTO } from "../models/aluno_complete.dto";
import { AlunoDisciplinaDTO } from "../models/aluno_disciplina.dto";
import { StorageService } from "./storage.service";

@Injectable()
export class AlunoService {

    constructor(public http: HttpClient, public storage: StorageService) {
    }

    findByEmail(email: string) : Observable<AlunoDTO> {
        return this.http.get<AlunoDTO>(`${API_CONFIG.baseUrl}/alunos/email?value=${email}`);
    }
    
    search(email: string) : Observable<AlunoCompleteDTO> {
        return this.http.get<AlunoCompleteDTO>(`${API_CONFIG.baseUrl}/alunos/email/complete?value=${email}`);
    }

    findAll() : Observable<AlunoDTO[]> {
        return this.http.get<AlunoDTO[]>(`${API_CONFIG.baseUrl}/alunos`);
    }

    insert(obj: AlunoDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/alunos`, obj, {observe: 'response', responseType: 'text'});
    }
    
    insertDisciplinaInAluno(obj: AlunoDisciplinaDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/alunos/disciplina`, obj, {observe: 'response', responseType: 'text'});
    }
}