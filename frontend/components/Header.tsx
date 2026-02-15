"use client" // This line makes it a client component!

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {

    // State: is the menu open or closed?
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Function to toggle menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen) // Flip between true/false
    }

    return (
    
        <header className="fixed top-0 left-0 right-0 z-50">

            <nav className="max-w-7xl mx-auto px-6 py-4">

                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/">
                        <Image 
                            src="/header-logo.svg" 
                            alt="CANN Design logo" 
                            width={70} 
                            height={70} 
                            className="opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out"
                        />
                    </Link>

                    {/* Desktop Nav Links - hidden on mobile */}

                    <ul className="hidden md:flex w-full justify-center gap-6 lg:gap-8">
                        <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out">
                            <Link href="/projects">
                                Projects
                            </Link>
                        </li>
                        <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out">
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out">
                            <Link href="/collaborate">
                                Collaborate
                            </Link>
                        </li>
                        <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out">
                            <Link href="/rent">
                                Rent
                            </Link>
                        </li>
                        <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out">
                            <Link href="/teach">
                                Teach
                            </Link>
                        </li>
                        <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out">
                            <Link href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Nav Button */}
                    <button 
                        className="md:hidden bg-black text-white p-2 rounded-full"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >   
                        {/* Show X when open, Menu when close */}
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                </div>

                {/* Mobile Nav Menu - shown/hidden based on state*/}
                {isMenuOpen && (
                <div className="md:hidden mt-4">
                    <ul className="flex flex-col gap-3">
                        <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full text-center">
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full text-center">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full text-center">
                            <Link href="/collaborate">Collaborate</Link>
                        </li>
                        <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full text-center">
                            <Link href="/rent">Rent</Link>
                        </li>
                        <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full text-center">
                            <Link href="/teach">Teach</Link>
                        </li>
                        <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full text-center">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                )}

            </nav>

        </header>

    )

}