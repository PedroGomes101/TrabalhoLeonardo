interface Repository<T> {
    listar(): Promise<T[]>;
    buscar(id: number): Promise<T | null>;
    criar(item: T): Promise<T>;
    atualizar(id: number, item: T): Promise<T>;
    excluir(id: number): Promise<void>;
}