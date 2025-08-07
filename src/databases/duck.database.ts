import duckdb from "duckdb";
import fs from "fs";

const dbFilePath = "./src/databases/jcounter.db";

const dbExists = fs.existsSync(dbFilePath);

export const DuckDB = new duckdb.Database(dbFilePath);

function runQuery(sql: string): Promise<void> {
  return new Promise((resolve, reject) => {
    DuckDB.run(sql, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

async function initializeDatabase() {
  if (!dbExists) {
    try {
      await runQuery(createUserTableQuery);
      console.log("Users table created successfully");
    } catch (error) {
      console.error("Error creating users table:", error);
    }
  } else {
    console.log("Database file exists, assuming tables are already created");
  }
}

const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR UNIQUE,
    username VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    firstName VARCHAR,
    lastName VARCHAR,
    isVerified BOOLEAN DEFAULT false,
    isActive BOOLEAN DEFAULT true,
    createdAt TIMESTAMP DEFAULT current_timestamp,
    updatedAt TIMESTAMP DEFAULT current_timestamp,
    lastLoginAt TIMESTAMP
  );
`;

initializeDatabase();
