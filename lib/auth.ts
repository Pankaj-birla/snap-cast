import "dotenv/config"; 
import { db } from "@/drizzle/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

console.log("BETTER_AUTH_API_KEY:", process.env.BETTER_AUTH_API_KEY);
export const auth = betterAuth({
  apiKey: process.env.BETTER_AUTH_API_KEY!,
  database: drizzleAdapter(db, { provider: "pg" }),
});
