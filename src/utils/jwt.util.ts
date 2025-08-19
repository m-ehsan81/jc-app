import jwt from "jsonwebtoken";

const SECRET = "REPLACE_WITH_A_STRONG_SECRET";

export function signJWT(payload: object) {
  return jwt.sign(payload, SECRET, { expiresIn: "7d" });
}

export function verifyJWT(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}
