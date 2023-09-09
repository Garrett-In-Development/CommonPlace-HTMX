import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const entries = sqliteTable("entries", {
    id: integer("id", { mode: "number"}).primaryKey({ autoIncrement: true }),
    content: text("content").notNull(),
    notes: text("notes").notNull(),
});

export type Entry = typeof entries.$inferSelect;
export type NewEntry = typeof entries.$inferInsert;
