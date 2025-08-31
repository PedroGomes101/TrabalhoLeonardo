import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

export async function conexao(): Promise<Database> {
    return open({
        filename: './database.sqlite',
        driver: sqlite3.Database
    });
}
