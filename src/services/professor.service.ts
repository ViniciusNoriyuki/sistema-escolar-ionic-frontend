import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../config/api.config";
import { ProfessorDTO } from "../models/professor.dto";
import { StorageService } from "./storage.service";

@Injectable()
export class ProfessorService {

    constructor(public http: HttpClient, public storage: StorageService) {
    }

    findByEmail(email: string) : Observable<ProfessorDTO> {
        return this.http.get<ProfessorDTO>(`${API_CONFIG.baseUrl}/professores/email?value=${email}`);
    }

    findAll() : Observable<ProfessorDTO[]> {
        return this.http.get<ProfessorDTO[]>(`${API_CONFIG.baseUrl}/professores`);
    }

    insert(obj: ProfessorDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/professores`, obj, {observe: 'response', responseType: 'text'});
    }
}