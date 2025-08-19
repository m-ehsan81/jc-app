import db from "@/databases/duck.database";
import { verifyJWT } from "@/utils/jwt.util";

export async function POST(req: Request) {
  const auth = req.headers.get("authorization");
  if (!auth) return Response.json({ error: "No token" }, { status: 401 });
  const token = auth.split(" ")[1];
  const user = verifyJWT(token);
  const userId =
    typeof user === "object" && user !== null && "id" in user
      ? (user as { id: string | number }).id
      : undefined;
  if (!userId)
    return Response.json({ error: "Invalid token" }, { status: 401 });

  // Check last 30 minutes logs
  const now = Date.now();
  const halfHourAgo = now - 30 * 60 * 1000;
  const countResult = db
    .prepare(
      "SELECT COUNT(*) as cnt FROM counter_logs WHERE user_id = ? AND timestamp > ?"
    )
    .all(userId, halfHourAgo);

  const count =
    Array.isArray(countResult) && countResult.length > 0
      ? Number(countResult[0].cnt)
      : 0;

  if (count >= 3) {
    return Response.json({ error: "Limit reached" }, { status: 429 });
  }

  db.prepare("UPDATE users SET counter = counter + 1 WHERE id = ?").run(userId);
  db.prepare("INSERT INTO counter_logs (user_id, timestamp) VALUES (?, ?)").run(
    userId,
    now
  );

  const updatedResult = db
    .prepare("SELECT counter FROM users WHERE id = ?")
    .all(userId);
  const updated =
    Array.isArray(updatedResult) && updatedResult.length > 0
      ? updatedResult[0]
      : null;

  return Response.json({ counter: updated?.counter ?? null });
}
