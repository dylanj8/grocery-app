import React from "react";

import { prisma } from "@/app/db/prisma";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function GroceryForm() {
  const session = await getServerSession(authOptions);
  console.log(session?.user);
  async function addGroceryItem(data: FormData) {
    "use server";
    const groceryItem = data.get("groceryItem") as string;
    const newItem = await prisma.groceryItems.findFirst({
      where: { name: groceryItem },
    });

    if (newItem) {
      await prisma.groceryItems.update({
        where: { name: groceryItem },
        data: { amount: { increment: 1 } },
      });
    } else {
      await prisma.groceryItems.create({
        data: { name: groceryItem, amount: 1, bought: false },
      });
    }

    console.log("item added");
    revalidatePath("/database");
  }

  if (session) {
    return (
      <div className="flex items-center justify-center mt-6">
        <form action={addGroceryItem} className="flex gap-4">
          <input
            type="text"
            placeholder="Cornettos, Steak..."
            name="groceryItem"
            className="input input-bordered w-full "
          />
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </form>
      </div>
    );
  } else {
    return <div>Not signed in</div>;
  }
}
