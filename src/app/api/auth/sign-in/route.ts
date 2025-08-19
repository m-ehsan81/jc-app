import db from "@/databases/duck.database";
import bcrypt from "bcryptjs";
import { signJWT } from "@/utils/jwt.util";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  if (!username || !password)
    return Response.json({ error: "Missing fields" }, { status: 400 });

  const stmt = db.prepare("SELECT * FROM users WHERE username = ?");
  const rows = stmt.all(username);
  const user = Array.isArray(rows) && rows.length > 0 ? rows[0] : null;

  if (!user)
    return Response.json({ error: "Invalid credentials" }, { status: 401 });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid)
    return Response.json({ error: "Invalid credentials" }, { status: 401 });

  const token = signJWT({ id: user.id, username });
  return Response.json({ token });
}
