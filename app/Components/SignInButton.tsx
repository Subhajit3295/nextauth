// components/SignInButton.jsx
"use client";

import { signIn } from "next-auth/react";

export const GithubSignInButton = () => {
  return (
    <button
      onClick={() => signIn('github')}
      className="bg-white text-black hover:bg-gray-200 p-2 rounded mt-2 w-fit mx-auto"
    >
      Github
    </button>
  );
}

export const GoogleSignInButton = () => {
  return (
    <button
      onClick={() => signIn('google')}
      className="bg-white text-black hover:bg-gray-200 p-2 rounded mt-2 w-fit mx-auto"
    >
      Google
    </button>
  );
}

