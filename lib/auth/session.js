import { ironSession, withIronSession } from "next-iron-session";

const cookiedSession = {
  cookieName: "crit-session",
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieOptions: {
    secure: process.env.NODE_ENV === "development",
  },
}

const withSession = ironSession(cookiedSession);

const withSessionSSR = (handler) => {
  return withIronSession(handler, cookiedSession)
}

export {
  withSessionSSR,
  withSession 
}
