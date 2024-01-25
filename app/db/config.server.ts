// @/app/db/config.server.ts
import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";

if (!process.env.DATABASE_PATH) {
    throw new Error(
      "Missing environment variable: DATABASE_PATH",
    )
  }

export const db = drizzle(
  new Database(process.env.DATABASE_PATH),
)

migrate(db, { migrationsFolder: "./app/db/migrations" });