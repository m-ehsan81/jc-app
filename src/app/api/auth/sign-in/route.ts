/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
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

    const sqlQuery = `SELECT * FROM users WHERE username = ? LIMIT 1;`;

    const rows = await new Promise<any[]>((resolve, reject) => {
      DuckDB.all(sqlQuery, username, (err, res) => {
        if (err) return reject(err);
        resolve(res);
      });
    });

    if (rows.length === 0) {
      return new Response(
        JSON.stringify({ error: "Invalid username or password" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    const user = rows[0];

    if (user.password !== password) {
      return new Response(
        JSON.stringify({ error: "Invalid username or password" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    const { password: _, ...userWithoutPassword } = user;

    return new Response(
      JSON.stringify({
        message: "Sign-in successful",
        user: userWithoutPassword,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: "Invalid request body", detail: error.message }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
}
