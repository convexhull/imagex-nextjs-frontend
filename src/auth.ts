import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize({ email, password }) {
        console.log(email, password);
        const response = await fetch("http://localhost:4000/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          cache: "no-store",
        });
        console.log(await response.json());
        // if (!response.ok) return null;

        return (await response.json()) ?? null;
      },
    }),
  ],
  // pages: {
  //   signIn: "/login",
  // },
});
