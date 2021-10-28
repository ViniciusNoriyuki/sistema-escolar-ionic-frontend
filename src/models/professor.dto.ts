import { DisciplinaDTO } from "./disciplina.dto";

export interface ProfessorDTO {
    id : string;
    nome : string;
    email : string;
    disciplina : DisciplinaDTO;
}