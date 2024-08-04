'use client';
import getItems from "@/getItems";
import { useState, useEffect } from "react";

export default function useItems() {
    const [items, setItems] = useState<any>([]);

    useEffect(() => {
        const call = async() => {
            const res = await getItems();
            setItems(res);
        }
        console.log('calling getitems')
        call();
    }, [])

    return items;
}