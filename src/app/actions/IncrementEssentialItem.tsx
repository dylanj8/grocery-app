"use server";
import { prisma } from "@/app/db/prisma";
import { EssentialItem } from "../types/types";
import { revalidatePath } from "next/cache";

export default async function IncEssentialItem(
  item: EssentialItem,
  quant: number
) {
  const itemName = item.name;
  await prisma.essentialItems.update({
    where: { name: itemName },
    data: {
      quantity: quant,
    },
  });
  // await prisma.essentialItems.create({
  //   data: {
  //     name: "Butter",
  //     quantity: 1,
  //   },
  // });
  revalidatePath("/database");
  console.log(itemName);
  console.log(quant);
  console.log("successfully updated item");
  const newItems = await prisma.essentialItems.findMany();
  console.log(newItems);
}
