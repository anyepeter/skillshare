"use client"
import React from 'react'
import { useState } from "react"
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Handshake,
  } from "lucide-react";

export default function Navbar() {
    const [state, setState] = useState(false)

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Groups", path: "/groups" },
        { title: "Skills", path: "/skills" },
        { title: "members", path: "/members" },

    ]
  return (
    <> <header className="border-b fixed top-0 left-0 right-0 z-10 bg-transparent backdrop-blur-lg bg-opacity-30 h-16">
                <nav className="container items-center pt-5 px-4 mx-auto sm:px-8 md:flex md:space-x-6">
                <div className="flex justify-between">
                <Link href="/" className="flex items-center space-x-2">
            <Handshake className="h-6 w-6" />
            <span className="font-bold text-xl">SkillSwap</span>
          </Link>
                    <button className="text-gray-500 outline-none md:hidden"
                        onClick={() => setState(!state)}
                    >
                        {
                            state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )
                        }
                    </button>
                </div>
                <ul className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${state ? 'absolute inset-x-0 px-4 border-b bg-white md:border-none md:static' : 'hidden'}`}>
                    <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
                        {
                            navigation.map((item, idx) => (
                                <li className="text-gray-500 hover:text-indigo-600" key={idx}>
                                    <a href={item.path}>{item.title}</a>
                                </li>
                            ))
                        }
                    </div>
                    <div>
                    <SignedIn>
              <div className='flex gap-4'>
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link href="/skills">
                <Button variant="ghost">Browse Skills</Button>
              </Link>
              <Link href="dashboard/skill">
                <Button variant="ghost" className='p-4 bg-blue-700 text-white'>Set Skills</Button>
              </Link>
              <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/sign-up">
                <Button variant="default">Get Started</Button>
              </Link>
            </SignedOut>
            </div>
                </ul>
            </nav>
            </header>
    </>
  )
}
