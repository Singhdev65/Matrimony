"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <p>Signed in as {session.user.email}</p>
        <button onClick={() => signOut()}>Signout</button>
      </>
    );
  }
  return (
    <>
      Not signed In
      <button onClick={() => signIn()}>signIn</button>
      <button
        onClick={() =>
          signIn("google", { callbackUrl: "http://localhost:3000/dashboard" })
        }
      >
        signIn with google
      </button>
    </>
  );
}
