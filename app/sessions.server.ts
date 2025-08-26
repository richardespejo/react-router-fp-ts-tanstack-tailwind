import { createCookieSessionStorage } from "react-router";

type SessionData = {
  userId: string;
  token: string;
  name: string;
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>(
    {
      cookie: {
        name: "__session",

        domain: "localhost",
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 1,
        path: "/",
        sameSite: "lax",
        secrets: ["s3cret1"], //clave inter de cookies que puede ser cualquier cosa
        secure: true,
      },
    },
  );

export { getSession, commitSession, destroySession };
