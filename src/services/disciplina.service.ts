import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../config/api.config";
import { DisciplinaDTO } from "../models/disciplina.dto";
import { StorageService } from "./storage.service";

@Injectable()
export class DisciplinaService {

    constructor(public http: HttpClient, public storage: StorageService) {
    }

    insert(obj: DisciplinaDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/disciplinas`, obj, {observe: 'response', responseType: 'text'});
    }
}