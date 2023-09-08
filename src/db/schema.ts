import { InferModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const entries = sqliteTable("todos", {
    id: integer("id", { mode: "number"}).primaryKey({ autoIncrement: true }),
    content: text("content").notNull(),
    notes: text("notes").notNull(),
});

export type Entry = InferModel<typeof entries>;
