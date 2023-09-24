import Image from "next/image";
import GroceryForm from "./components/GroceryForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GroceryForm />
    </main>
  );
}
