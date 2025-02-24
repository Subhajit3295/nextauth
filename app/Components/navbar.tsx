// components/Navbar.jsx
import { auth } from "@/auth";
import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="text-center bg-gray-800 text-white p-4">
      {session && session.user ? (
        <div>
          <h1 className="text-2xl">Welcome {session.user.name}</h1>
          <div>
            <p className="text-sm">You are logged in</p>
            {/*  */}
            <SignOutButton />
            <Link href={`/user/${session.user.id}`}>
              
            </Link>
          </div>
        </div>
      ) : (
        // Render the client component for sign in
        <SignInButton />
      )}
    </div>
  );
};

export default Navbar;
