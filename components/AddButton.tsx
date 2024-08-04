'use client';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import addItem from "@/addItem"
import { useState } from "react"

export default function AddButton() {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Item</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Item</DialogTitle>
          <DialogDescription>
            Add an item here. Click submit when youre done.
          </DialogDescription>
        </DialogHeader>
            <form onSubmit={async() => await addItem(name, count)}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
                
            <Label htmlFor="name" className="text-right">
              Item Name
            </Label>
            <Input
              id="name"
              defaultValue=""
              className="col-span-3"
              onChange={e => setName(e.target.value)}

            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Count
            </Label>
            <Input
              id="count"
              type="number"
              defaultValue={0}
              className="col-span-3"
              onChange={e => setCount(+e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
