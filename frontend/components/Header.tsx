"use client" // This line makes it a client component!

import { useState, useEffect } from 'react'
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

    useEffect(() => {
        if (!isMenuOpen) return // Only runs when menu is open

        const handleClickOutside = () => setIsMenuOpen(false)
        document.addEventListener('click', handleClickOutside)

        return () => document.removeEventListener('click', handleClickOutside)

    }, [isMenuOpen])

    const navLinks = [
        { href: '/projects', label: 'Projects' },
        { href: '/about', label: 'About' },
        { href: '/collaborate', label: 'Collaborate' },
        { href: '/rent', label: 'Rent' },
        { href: '/teach', label: 'Teach' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
    
        <header className="fixed top-0 left-0 right-0 z-50">

            <nav className="backdrop-blur-md bg-black/40 border-b border-white/10">

                <div className="flex items-center justify-between px-6 py-4">

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

                    <ul className="hidden md:flex w-full justify-center md:gap-6">
                        {navLinks.map((link) => ( // Maps overLinks array to display desktop nav links
                            <li key={link.href}>
                                <Link href={link.href} className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full border-solid opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out">{link.label}</Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Nav Button */}
                    <div className="md:hidden w-10 flex justify-end flex-shrink-0">
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
                <div className={`md:hidden grid transition-all duration-300 ease-in-out ${isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                        <ul className="flex flex-col gap-4 px-6 py-6">
                            {navLinks.map((link) => ( 
                                <li key={link.href} className='mb-4'>
                                    <Link href={link.href} onClick={toggleMenu}  className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full border-solid opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </nav>

        </header>

    )

}