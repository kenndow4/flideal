import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken: string;
     user: {
      background?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
  }
}
