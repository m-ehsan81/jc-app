import duckdb from "duckdb";

const db = new duckdb.Database("jcounter.db");

// Initialize tables if not exist
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT,
    counter INTEGER DEFAULT 0
  );
`);
db.run(`
  CREATE TABLE IF NOT EXISTS counter_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    timestamp INTEGER
  );
`);

export default db;
