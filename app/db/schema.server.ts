import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const dogs = sqliteTable("dogs", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  breed: text("breed").notNull(),
});

export const items = sqliteTable("items", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  createdAt: text("createdAt")
    .notNull()
    .default(`datetime("now")`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(`datetime("now")`),
})
