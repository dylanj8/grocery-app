import { GroceryDisplay } from "./components/GroceryDisplay";
import GroceryForm from "./components/GroceryForm";
import { prisma } from "@/app/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const essentials = await prisma.essentialItems.findMany();
  const groceries = await prisma.groceryItems.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center p-4 max-w-md">
      <GroceryDisplay
        essentials={essentials}
        groceries={groceries}
        session={session}
      />
      <GroceryForm />
    </main>
  );
}
