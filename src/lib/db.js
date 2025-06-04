import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { openDB } from './dbConfig';

const dbFile = path.join(process.cwd(), 'db.sqlite');

function initializeDatabase() {
  if (!fs.existsSync(dbFile)) {
    const dbInit = new Database(dbFile);
    try {
      dbInit.exec(`
        CREATE TABLE focos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nome TEXT NOT NULL,
          endereco TEXT NOT NULL,
          tipo TEXT NOT NULL,
          imagem TEXT,
          lat REAL NOT NULL,
          lng REAL NOT NULL,
          data_registro TEXT DEFAULT CURRENT_TIMESTAMP
        )
      `);
      console.log('Banco de dados inicializado com sucesso');
    } catch (error) {
      console.error('Erro ao inicializar banco de dados:', error);
    } finally {
      dbInit.close();
    }
  }
}

initializeDatabase();

const db = new Database(dbFile, { verbose: console.log });

export function insertFoco(foco) {
  try {
    const stmt = db.prepare(`
      INSERT INTO focos (nome, endereco, tipo, imagem, lat, lng)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    const info = stmt.run(foco.nome, foco.endereco, foco.tipo, foco.imagem, foco.lat, foco.lng);
    return { id: info.lastInsertRowid, ...foco };
  } catch (error) {
    console.error('Erro ao inserir foco:', error);
    throw error;
  }
}

export function getAllFocos() {
  try {
    const stmt = db.prepare(`SELECT * FROM focos ORDER BY data_registro DESC`);
    return stmt.all();
  } catch (error) {
    console.error('Erro ao buscar focos:', error);
    throw error;
  }
}

export function deleteFoco(id) {
  try {
    const stmt = db.prepare(`DELETE FROM focos WHERE id = ?`);
    const info = stmt.run(id);
    return { changes: info.changes };
  } catch (error) {
    console.error('Erro ao deletar foco:', error);
    throw error;
  }
}

export async function getFocoById(id) {
  const db = await openDB();
  const foco = await db.get("SELECT * FROM focos WHERE id = ?", [id]);
  return foco;
}