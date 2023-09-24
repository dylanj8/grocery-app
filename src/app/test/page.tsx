"use client";
import { useSession } from "next-auth/react";
export default function Page() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h1>Hello {session?.user?.name}</h1>
      </>
    );
  }
  return <h1>not signed in</h1>;
}
