import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@xyz.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        // db logic to check user
        const user = {
          email: "xyz.com",
          id: "2",
          name: "somename",
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),

    Google({
      clientId: "xyz",
      clientSecret: "abc",
    }),

    Github({
      clientId: "xyz",
      clientSecret: "abc",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
