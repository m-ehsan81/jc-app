import db from "@/databases/duck.database";
import bcrypt from "bcryptjs";
import { signJWT } from "@/utils/jwt.util";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  if (!username || !password)
    return Response.json({ error: "Missing fields" }, { status: 400 });

  // Check if user already exists
  const checkStmt = db.prepare("SELECT id FROM users WHERE username = ?");
  const existingRows = checkStmt.all(username);
  if (Array.isArray(existingRows) && existingRows.length > 0)
    return Response.json({ error: "Username already exists" }, { status: 409 });

  // Hash password and insert new user
  const hash = await bcrypt.hash(password, 10);
  db.prepare(
    "INSERT INTO users (username, password, counter) VALUES (?, ?, 0)"
  ).run(username, hash);

  // Get the new user's id
  const userStmt = db.prepare("SELECT id FROM users WHERE username = ?");
  const userRows = await userStmt.all(username);

  const user =
    Array.isArray(userRows) && userRows.length > 0 ? userRows[0] : null;

  if (!user)
    return Response.json({ error: "User creation failed" }, { status: 500 });

  const token = signJWT({ id: user.id, username });
  return Response.json({ token });
}
