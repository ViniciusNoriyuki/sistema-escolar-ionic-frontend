import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../config/api.config";
import { NotaNewDTO } from "../models/nota_new.dto";
import { StorageService } from "./storage.service";

@Injectable()
export class NotaService {

    constructor(public http: HttpClient, public storage: StorageService) {
    }

    insert(obj: NotaNewDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/notas`, obj, {observe: 'response', responseType: 'text'});
    }
}