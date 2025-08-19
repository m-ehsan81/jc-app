import db from "@/databases/duck.database";

export async function GET() {
  const rows = db
    .prepare(
      "SELECT username, counter FROM users ORDER BY counter DESC LIMIT 10"
    )
    .all();
  return Response.json({ leaderboard: rows });
}
