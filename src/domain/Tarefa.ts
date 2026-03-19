class Tarefa{
    private nome: string;
    private descricao: string;
    private status: string;

    constructor(nome: string, descricao: string, status: string) {
        if (!nome || nome.trim().length === 0) {
            throw new Error("Nome não pode ser vazio");
        }
        if (nome.length > 100) {
            throw new Error("Nome não pode ter mais que 100 caracteres");
        }
        if (!descricao || descricao.trim().length === 0) {
            throw new Error("Nome não pode ser vazio");
        }
        if (descricao.length > 100) {
            throw new Error("Nome não pode ter mais que 100 caracteres");
        }
        if (!status || status.trim().length === 0) {
            throw new Error("Nome não pode ser vazio");
        }
        if (status.length > 100) {
            throw new Error("Nome não pode ter mais que 100 caracteres");
        }
        this.nome = nome;
        this.descricao = descricao;
        this.status = status;
    }
    toJson(){
        return {
            nome: this.nome,
            descricao: this.descricao,
            status: this.status
        };
    }
}
