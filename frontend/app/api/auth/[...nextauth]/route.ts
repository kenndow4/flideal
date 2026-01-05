import { api } from "@/src/components/lib/axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }
         try {
           const res = await api.post("/auth/signin", {
             email: credentials.email,
             password: credentials.password,
            });
            
          const { user } = res.data;
          console.log({user})

          if (!user.token) {
            throw new Error("Invalid credentials");
          }


          return {
            id: user.id,
            name: user.name,
            email: user.email,
            background: user.background,
            accessToken: user.token,
          };
        } catch (error: any) {
          const message =
            error.response?.data?.message || "Authentication failed";

          throw new Error(message);
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = (user as any).accessToken;
         token.background = (user as any).background;
        
      }
      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.user.background = token.background as string
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
