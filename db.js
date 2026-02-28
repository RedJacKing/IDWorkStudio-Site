import Database from 'better-sqlite3';

const db = new Database('projects.db');

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    imageUrl TEXT NOT NULL,
    category TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    "order" INTEGER DEFAULT 0
  )
`);

export default db;
