import { Tarefarepository } from "../repo/Tarefarepository";
export class TarefaService {
    constructor(private repository: ITarefaRepo) {}

    async listar(): Promise<Tarefa[]> {
        try {
            return await this.repository.listar();
        } catch (error) {
            throw new Error("Erro ao listar tarefas: " + error);
        }
    }

    async buscar(id: number): Promise<Tarefa | null> {
        try {
            return await this.repository.buscar(id);
        } catch (error) {
            throw new Error("Erro ao buscar tarefa: " + error);
        }
    }

    async criar(aluno: Aluno): Promise<Aluno> {
        if (!this.validarAluno(aluno)) {
            throw new Error("Dados inválidos");
        }
        try {
            return await this.repository.criar(aluno);
        } catch (error) {
            throw new Error("Erro ao criar aluno: " + error);
        }
    }

    async atualizar(matricula: string, aluno: Aluno): Promise<Aluno> {
        if (!this.validarAluno(aluno)) {
            throw new Error("Dados inválidos");
        }
        if (!this.matriculaValida(matricula)) {
            throw new Error("Matrícula inválida");
        }

        const alunoExistente = await this.buscar(matricula);
        if (!alunoExistente) {
            throw new Error("Aluno não encontrado");
        }

        try {
            return await this.repository.atualizar(matricula, aluno);
        } catch (error) {
            throw new Error("Erro ao atualizar aluno: " + error);
        }
    }

    async excluir(matricula: string): Promise<void> {
        if (!this.matriculaValida(matricula)) {
            throw new Error("Matrícula inválida");
        }

        const alunoExistente = await this.buscar(matricula);
        if (!alunoExistente) {
            throw new Error("Aluno não encontrado");
        }

        try {
            await this.repository.excluir(matricula);
        } catch (error) {
            throw new Error("Erro ao excluir aluno: " + error);
        }
    }

    private validarAluno(aluno: Aluno): boolean {
        try {
            // As validações já são feitas nos setters do modelo
            return true;
        } catch (error) {
            return false;
        }
    }

    private matriculaValida(matricula: string): boolean {
        return typeof matricula === "string" && matricula.trim().length > 0;
    }
}