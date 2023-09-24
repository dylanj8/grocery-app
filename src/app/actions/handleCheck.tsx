"use server";

import { prisma } from "@/app/db/prisma";
import { revalidatePath } from "next/cache";
import { GroceryItem } from "@/app/types/types";

export default async function handleCheckedFunc(item: GroceryItem) {
  try {
    const newItem = await prisma.groceryItems.update({
      where: { name: item.name },
      data: { bought: { set: item.bought } },
    });
    revalidatePath("/database");
  } catch (error) {
    ("couldn't update this item");
  }
}
