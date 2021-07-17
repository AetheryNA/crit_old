import { ironSession } from "next-iron-session";

const session = ironSession({
  cookieName: "crit-session",
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieOptions: {
    secure: process.env.NODE_ENV === "development",
  },
});

export default session
