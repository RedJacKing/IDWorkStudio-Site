import db from './db.js';

try {
  const stmt = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='projects'");
  const table = stmt.get();
  console.log('Table exists:', table);

  if (table) {
    const count = db.prepare('SELECT count(*) as count FROM projects').get();
    console.log('Project count:', count);
  }
} catch (error) {
  console.error('Database check failed:', error);
}
