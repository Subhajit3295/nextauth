// components/Navbar.jsx
import { auth } from "@/auth";
import React from "react";
import { GithubSignInButton, GoogleSignInButton} from "./SignInButton";
import SignOutButton from "./SignOutButton";


const Navbar = async () => {
  const session = await auth();



  return (
    <div className="text-center bg-gray-800 text-white p-4">
      {session && session?.user ? (
        <div>
          <h1 className="text-xl">Logged in as - {session.user.name}</h1>
          <div>
            <SignOutButton />
            
          </div>
        </div>
      ) : (
        // Render the client component for sign in
        <div className="flex flex-col gap-2">
          <span>Log in with</span>
          <GithubSignInButton/>
          <GoogleSignInButton/>

        </div>
      )}
    </div>
  );
};

export default Navbar;
