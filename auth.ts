import NextAuth from "next-auth";
import github from "next-auth/providers/github";

import { authConfig } from './auth.config';

export const {handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
});

