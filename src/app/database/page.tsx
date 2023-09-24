import { prisma } from "@/app/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import GroceryForm from "../components/GroceryForm";
import { GroceryDisplay } from "../components/GroceryDisplay";

export default async function Database() {
  const session = await getServerSession(authOptions);
  const essentials = await prisma.essentialItems.findMany();
  const groceries = await prisma.groceryItems.findMany();

  if (session) {
    return (
      <>
        <GroceryDisplay
          essentials={essentials}
          groceries={groceries}
          session={session}
        />

        <GroceryForm />
      </>
    );
  }
}
