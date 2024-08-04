import {
    pgTable,
    serial,
    integer,
    varchar,
  } from "drizzle-orm/pg-core";
  
  export const items = pgTable("items", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    count: integer("count").notNull(),
  });
  