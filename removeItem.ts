'use server';
import { db } from "@/db";
import { items } from "@/schema";
import { sum, eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export default async function removeItem(id : number) {
    const res = await db.delete(items).where(eq(items.id, id))
    revalidatePath('/')
}