"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Signup from "./Signup";
import * as Styled from "./styles";

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
      {/* Not signed In
      <Styled.Button onClick={() => signIn()}>signIn</Styled.Button>
      <Styled.GoogleButton
        onClick={() =>
          signIn("google", { callbackUrl: "http://localhost:3000/dashboard" })
        }
      >
        signIn with google
      </Styled.GoogleButton> */}
      <Signup />
    </>
  );
}
