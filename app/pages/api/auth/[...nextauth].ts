import NextAuth from "next-auth";
import FusionAuthProvider from "next-auth/providers/fusionauth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "../../../db";

export const authOptions = {
  // adapter: PrismaAdapter(db),
  // Configure one or more authentication providers
  providers: [
    FusionAuthProvider({
      id: "fusionauth",
      name: "FusionAuth",
      issuer: "http://localhost:9011",
      clientId: "db2f58a3-b6d1-420b-b8ca-554c0dc32055",
      clientSecret: "6rLWTpvveEkRFe3HQ45oM9Ra3mmzRvPIKtv6VIXbaI8",
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
