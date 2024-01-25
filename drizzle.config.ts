import type { Config } from "drizzle-kit";
export default {
  schema: "./app/db/schema.server.ts",
  out: "./app/db/migrations",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./app/db/sqlite.db", // 👈 this could also be a path to the local sqlite file
  }
} satisfies Config;
