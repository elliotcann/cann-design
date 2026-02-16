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

            <nav className="max-w-7xl mx-auto">

                <div className="flex items-center justify-between  px-6 py-4 bg-white-400 backdrop-filter backdrop-blur-sm bg-opacity-20">

                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <Image 
                            src="/header-logo.svg" 
                            alt="CANN Design logo" 
                            width={70} 
                            height={70} 
                            className="opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out"
                        />
                    </Link>

                    {/* Desktop Nav Links - hidden on mobile */}

                    <ul className="hidden lg:flex w-full justify-center lg:gap-8">
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
                    <div className="lg:hidden w-10 flex justify-end flex-shrink-0">
                        <button 
                            className="bg-black text-white p-2 rounded-full"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >   
                            {/* Show X when open, Menu when close */}
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                </div>

                {/* Mobile Nav Menu - shown/hidden based on state*/}
                <div className={`lg:hidden h-screen w-64 fixed top-20 right-0 backdrop-filter backdrop-blur-sm bg-opacity-20 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <ul className="flex flex-col gap-6 mt-8 w-32 justify-self-center">
                        <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full text-center">
                            <Link href="/projects" onClick={toggleMenu}>Projects</Link>
                        </li>
                        <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full text-center">
                            <Link href="/about" onClick={toggleMenu}>About</Link>
                        </li>
                        <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full text-center">
                            <Link href="/collaborate" onClick={toggleMenu}>Collaborate</Link>
                        </li>
                        <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full text-center">
                            <Link href="/rent" onClick={toggleMenu}>Rent</Link>
                        </li>
                        <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full text-center">
                            <Link href="/teach" onClick={toggleMenu}>Teach</Link>
                        </li>
                        <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full text-center">
                            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>

            </nav>

        </header>

    )

}