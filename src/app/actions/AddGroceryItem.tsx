// "use server";
// import { prisma } from "@/app/db/prisma";

// export default async function AddGroceryItem(item) {
//   const newItem = await prisma.groceryItems.findFirst({
//     where: { name: item },
//   });

//   if (newItem) {
//     await prisma.groceryItems.update({
//       where: { name: item },
//       data: { amount: { increment: 1 } },
//     });
//   } else {
//     await prisma.groceryItems.create({
//       data: { name: item, amount: 1, bought: false },
//     });
//   }
// }
