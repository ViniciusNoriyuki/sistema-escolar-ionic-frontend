import { DisciplinaDTO } from "./disciplina.dto";

export interface NotaDTO {
    id : string;
    valor : number;
    disciplina : DisciplinaDTO;
}