import db from "@/databases/duck.database";
import { verifyJWT } from "@/utils/jwt.util";

export async function GET(req: Request) {
  const auth = req.headers.get("authorization");
  if (!auth) return Response.json({ error: "No token" }, { status: 401 });
  const token = auth.split(" ")[1];
  const user = verifyJWT(token);
  const userId =
    typeof user === "object" && user !== null && "id" in user
      ? (user as { id: string }).id
      : undefined;
  if (!userId) {
    return Response.json({ error: "Invalid token" }, { status: 401 });
  }

  // DuckDB returns an array, always pass parameters as array
  const result = db
    .prepare("SELECT username, counter FROM users WHERE id = ?")
    .all([userId]);
  const data = Array.isArray(result) && result.length > 0 ? result[0] : null;

  if (!data) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }
  return Response.json(data);
}
