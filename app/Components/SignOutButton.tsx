"use client"
import { signOut } from 'next-auth/react'

import React from 'react'

const SignOutButton = () => {
  return (
    <button
    onClick={() => signOut()}
    className="bg-gray-600 text-white p-2 rounded mt-2"
  >
    Sign out
  </button>
  )
}

export default SignOutButton
