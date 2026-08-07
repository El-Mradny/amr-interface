import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import authConfig from "./auth.config";
import { prisma } from "@/lib/prisma";

console.log("🔥 AUTH.TS LOADED");

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,

    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },

            // async authorize(credentials) {
            //     console.log("🔥 AUTHORIZE CALLED");
            //     console.log("Credentials received:", !!credentials);
            //     if (!credentials?.email || !credentials?.password) return null;
            //
            //     const user = await prisma.user.findUnique({
            //         where: {
            //             email: credentials.email as string,
            //         },
            //     });
            //
            //     if (!user) return null;
            //
            //     const valid = await bcrypt.compare(
            //         credentials.password as string,
            //         user.password
            //     );
            //
            //     if (!valid) return null;
            //
            //     return {
            //         id: user.id.toString(),
            //         name: user.name,
            //         email: user.email,
            //         role: user.role,
            //     };
            // },


            async authorize(credentials) {
                console.log("🔥 AUTHORIZE CALLED");

                if (!credentials?.email || !credentials?.password) {
                    console.log("❌ Missing email or password");
                    return null;
                }

                const email = String(credentials.email);
                const password = String(credentials.password);

                console.log("Email:", email);
                console.log("Password received:", !!password);

                const user = await prisma.user.findUnique({
                    where: {
                        email,
                    },
                });

                console.log("User exists:", !!user);

                if (!user) {
                    console.log("❌ User not found");
                    return null;
                }

                const passwordValid = await bcrypt.compare(
                    password,
                    user.password
                );

                console.log("Password valid:", passwordValid);

                if (!passwordValid) {
                    console.log("❌ Invalid password");
                    return null;
                }

                console.log("✅ LOGIN SUCCESS");

                return {
                    id: String(user.id),
                    name: user.name,
                    email: user.email,
                    role: user.role,
                };
            }


        }),
    ],

    pages: {
        signIn: "/login",
    },

    session: {
        strategy: "jwt",
    },
});