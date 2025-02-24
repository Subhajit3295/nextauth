# NextAuth Integration with Next.js

This project demonstrates how to integrate NextAuth for authentication (using GitHub as an example) in a Next.js application. It includes a Navbar component that displays the user’s session status and provides sign in/sign out functionality.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Setup and Configuration](#setup-and-configuration)
- [Creating the Navbar Component](#creating-the-navbar-component)
  - [1. Creating a Client Component for Sign In](#1-creating-a-client-component-for-sign-in)
  - [2. Creating the Server Component Navbar](#2-creating-the-server-component-navbar)
- [Running the Application](#running-the-application)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Overview

This guide explains how to:

- Configure NextAuth for GitHub authentication.
- Separate client-side functions (like `signIn` and `signOut`) from server components.
- Build a responsive Navbar component that shows a welcome message for logged in users or a GitHub sign in button for guests.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [Next.js](https://nextjs.org/) (v13 recommended for app directory features)
- A GitHub account (for GitHub authentication)
- Basic knowledge of React and Next.js

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/nextauth-integration.git
   cd nextauth-integration

## Step 1

Run the installation command:

- You can find the installation command from the official site [visit](https://authjs.dev/reference/nextjs)


## Step 2

Setup environment 

- Directly in the root of your application, create 'auth.ts'

write: 

    
    import NextAuth from "next-auth"
    import GitHub from "next-auth/providers/github"
    export const { handlers, auth } = NextAuth({ providers: [ GitHub ] })

Here we're exporting the NextAuth object with the complete configuration.

## Step 3

We have to add a route handeler under [./app/api/auth/[...nextauth]/route.ts]()



write: 

     
    import { handlers } from "@/auth"
    export const { GET, POST } = handlers

## Step 4

Setup authentication method

- Go to Github -> click on your account -> 'Settings' -> 'Developer options' -> click 'OAuth App' 

- Set Application name [Your required App name]
- Set Homepage URL [http://example.com]
- Set your Desired Desctiption
- Set the callback URL [https://example.com/api/auth/callback/github]
 - You can finally get the Client ID and Github secret

 ## Step 5
Adding credentials to the .env 

- Go to your .env file 

      GITHUB_ID=your_github_client_id
      GITHUB_SECRET=your_github_client_secret

  Make sure the [providers:[Github]]() is set to your [auth.ts]() file

## Step 6

In your Navbar.ts

Within here we only want to render things if the user is logged in

Write:

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
              <h1 className="text-2xl">Welcome {session.user.   name}</h1>
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


- Create another component where your Sign in and Sign Out buttons will be there.
- Make those components are client component by using ["use client"]()


The Sign in button will look like this:

[components/SignInButton.tsx]()

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

  The Sign Out button will look like this:

  [components/SignInButton.tsx]()

    "use client"
    import { signOut } from 'next-auth/react'

    import React from 'react'

    const SignOutButton = () => {
    return (
    <button onClick={() => signOut()}
    className="bg-gray-600 text-white p-2 rounded mt-2">
    Sign out
    </button>
    )}

    export default SignOutButton

# Now you're ready to Log in, verify and check