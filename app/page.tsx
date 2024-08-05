'use client';
import Image from "next/image";
import AddButton from "@/components/AddButton";
import useItems from "@/components/useItems";
import { Button } from "@/components/ui/button";
import removeItem from "@/removeItem";
const normalizeString = (str: string) => str.replace(/-/g, "").toLowerCase();
import { useState } from "react";
import { Input } from "@/components/ui/input"


export default function Home() {
  const [search, setSearch] = useState("");

  const items = useItems();
  const filteredItems = items
    .filter((item: any) =>
      normalizeString(item.name).includes(normalizeString(search)),
    )

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      
    };
  return (
    <>
    <Input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => handleSearch(e)}
          className="border inline w-auto bg-white text-black"
        />
    <AddButton />
      <div className='bg-red-50 border-2 rounded flex flex-col gap-2 p-3'>
        <div className='bg-blue-300 text-3xl'>
          Inventory Items
        </div>
        <div className='flex flex-col gap-5'>
          {filteredItems?.map((item : any) => <div key={item.id} className="flex justify-between">
            <span>{item.name} - {item.count}</span>
            <Button variant={'destructive'} onClick={async() => {await removeItem(item.id); location.reload()}} >Remove</Button>
            </div>)} 
        </div>
        </div>
    </>
  );
}
