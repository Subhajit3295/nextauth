"use client"
import { signOut } from 'next-auth/react'

import React from 'react'

const SignOutButton = () => {
  return (
    <button
    onClick={() => signOut()}
    className="bg-white text-black hover:bg-gray-200 p-2 rounded mt-2"
  >
    Sign out
  </button>
  )
}

export default SignOutButton
