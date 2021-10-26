import { DisciplinaDTO } from "./disciplina.dto";
import { NotaDTO } from "./nota.dto";

export interface AlunoCompleteDTO {
    id : string;
    nome : string;
    email : string;
    notas: NotaDTO[];
    disciplinas: DisciplinaDTO[];
}