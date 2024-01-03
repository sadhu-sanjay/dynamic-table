import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import github from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        github({
            clientId: process.env.AUTH_GITHUB_CLIENT_ID,
            clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET,
        }),
    ],
});

