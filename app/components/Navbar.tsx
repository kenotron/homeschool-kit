import { signIn } from "next-auth/react";

export const NavBar = () => {
  return (
    <div>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};
