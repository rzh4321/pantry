'use server';
import { db } from "@/db";
import { items } from "@/schema";
import { sum, eq, sql } from "drizzle-orm";

export default async function getItems() {
    const res = await db.select({id: items.id, name: items.name, count: items.count}).from(items);
    return res;
}