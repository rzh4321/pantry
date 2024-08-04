'use client';
import Image from "next/image";
import AddButton from "@/components/AddButton";
import useItems from "@/components/useItems";

export default  function Home() {
  const items = useItems();
  console.log(items)
  return (
    <>
    <AddButton />
      <div className='bg-red-50 border-2 rounded flex flex-col gap-2'>
        <div className='bg-blue-300 text-3xl'>
          Inventory Items
        </div>
        <div className='flex flex-col gap-5'>
          {items?.map(item => <div key={item.id}>{item.name} - {item.count}</div>)}
        </div>
        </div>
    </>
  );
}
