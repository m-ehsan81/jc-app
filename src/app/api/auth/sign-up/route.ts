/* eslint-disable @typescript-eslint/no-explicit-any */
import { randomUUID } from "crypto";
import { DuckDB } from "@/databases/duck.database";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password }: { username: string; password: string } = body;

    if (!username || !password) {
      return new Response(
        JSON.stringify({ error: "Missing username or password" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const generatedUUID = randomUUID();

    const sqlQuery = `
      INSERT INTO users (id, username, password, createdAt, updatedAt) 
      VALUES (?, ?, ?, current_timestamp, current_timestamp);
    `;

    await new Promise<void>((resolve, reject) => {
      DuckDB.run(sqlQuery, generatedUUID, username, password, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: "Request failed", detail: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
