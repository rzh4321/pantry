'use client';
import Image from "next/image";
import AddButton from "@/components/AddButton";
import useItems from "@/components/useItems";
import { Button } from "@/components/ui/button";
import removeItem from "@/removeItem";


export default function Home() {
  const items = useItems();

  return (
    <>
    <AddButton />
      <div className='bg-red-50 border-2 rounded flex flex-col gap-2 p-3'>
        <div className='bg-blue-300 text-3xl'>
          Inventory Items
        </div>
        <div className='flex flex-col gap-5'>
          {items?.map((item : any) => <div key={item.id} className="flex justify-between">
            <span>{item.name} - {item.count}</span>
            <Button variant={'destructive'} onClick={async() => {await removeItem(item.id); location.reload()}} >Remove</Button>
            </div>)} 
        </div>
        </div>
    </>
  );
}
