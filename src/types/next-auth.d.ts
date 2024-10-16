import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    _id?: string;
    isVerified?: boolean;
    username?: string;
    role?: string;
  }

  interface Session {
    user: {
      _id?: string;
      isVerified?: boolean;
      username?: string;
      role?: string;
    } & DefaultSession[user];
  }

  interface jwt {
    _id?: string;
    isVerified?: boolean;
    username?: string;
    role?: string;
  }
}
