'use client'

import {  
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default function Header() {

  return (
    <header className={`font-sans antialiased w-full px-6 py-4 bg-stone-10 shadow-sm flex items-center justify-between`}>
      <label className="text-xl font-semibold text-stone-200">
        The Tea Garden
      </label>
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-4 py-2 text-sm font-medium text-white bg-stone-800 rounded-md hover:bg-stone-600 transition cursor-pointer">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="px-4 py-2 text-sm font-medium text-white bg-stone-700 rounded-md hover:bg-stone-600 transition cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>
    </header>
  )
}