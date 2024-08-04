'use server';
import { db } from "@/db";
import { items } from "@/schema";
import { sum, eq, sql } from "drizzle-orm";
import { revalidatePath } from 'next/cache'

export default async function addItem(name : string, count : number) {
    await db.insert(items).values({ name: name, count: count});
 
    console.log('done')
}   