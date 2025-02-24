// components/SignInButton.jsx
"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <button
      onClick={() => signIn('github')}
      className="bg-gray-600 text-white p-2 rounded mt-2"
    >
      GitHub Login
    </button>
  );
}
