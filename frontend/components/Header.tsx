"use client" // This line makes it a client component!

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FaPinterestP } from 'react-icons/fa'
import { FiMenu, FiX, FiInstagram } from 'react-icons/fi'

export default function Header() {
    const pathname = usePathname()
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

    // Nav links lables and their extensions
    const navLinks = [
        { href: '/projects', label: 'Projects' },
        { href: '/about', label: 'About' },
        { href: '/collaborate', label: 'Collaborate' },
        { href: '/spaces', label: 'Spaces' },
        { href: '/education', label: 'Education' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
    
        <header className="fixed top-0 left-0 right-0 z-50">

            <nav className="backdrop-blur-md bg-black/40"
                style={{ maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }}>

                <div className="flex items-center justify-between px-6 pt-4 pb-8">

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

                    <ul className="hidden lg:flex w-full justify-center md:gap-6">
                        {navLinks.map((link) => ( // Maps overLinks array to display desktop nav links
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className={`text-sm tracking-wide font-bold py-2 px-4 rounded-full inline-block transition-all duration-300 ease-in-out border-2 border-black
                                    ${pathname === link.href
                                        ? "bg-white text-black"           // ← ACTIVE state
                                        : "bg-black text-white hover:opacity-75" // ← DEFAULT state
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Nav Social Links - hidden on mobile */}
                    <div className="hidden lg:flex flex-shrink-0 justify-center md:gap-6">
                        <a
                            href="https://www.instagram.com/cann.design/"
                            target="_blank"
                            className="bg-black text-white p-2 rounded-full border-2 border-black transition-all duration-300 ease-in-out hover:opacity-75 flex items-center justify-center"
                        >
                            <FiInstagram className="w-5 h-5"/>
                        </a>
                        <a
                            href="https://uk.pinterest.com/cann_design/"
                            target="_blank"
                            className="bg-black text-white p-2 rounded-full border-2 border-black transition-all duration-300 ease-in-out hover:opacity-75 flex items-center justify-center"
                        >
                            <FaPinterestP className="w-5 h-5"/>
                        </a>
                    </div>

                    {/* Mobile Nav Button */}
                    <div className="lg:hidden w-10 flex justify-end flex-shrink-0">
                        <button 
                            className="bg-black text-white p-2 rounded-full"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >   
                            {/* Show X when open, Menu when close */}
                            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>

                </div>

                {/* Mobile Nav Menu - shown/hidden based on state*/}
                <div className={`lg:hidden grid transition-all duration-300 ease-in-out ${isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                        <ul className="flex flex-col gap-4 px-6 py-6">
                            {navLinks.map((link) => ( 
                                <li key={link.href} className="mb-4">
                                    <Link
                                        href={link.href}
                                        onClick={toggleMenu}
                                        className={`text-sm tracking-wide font-bold py-2 px-4 rounded-full inline-block transition-all duration-300 ease-in-out border-2 border-black
                                        ${pathname === link.href
                                            ? "bg-white text-black"           // ← ACTIVE state
                                            : "bg-black text-white hover:opacity-75" // ← DEFAULT state
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            {/* Mobile Nav Social links - shown/hidden based on state*/}
                            <div className="lg:hidden flex justify-start gap-4 mb-24">
                                <a
                                    href="https://uk.pinterest.com/cann_design/"
                                    target="_blank"
                                    className="bg-black text-white p-2 rounded-full border-2 border-black transition-all duration-300 ease-in-out hover:opacity-75 inline-flex items-center justify-center"
                                >
                                    <FiInstagram className="w-5 h-5"/>
                                </a>
                                <a
                                    href="https://uk.pinterest.com/cann_design/"
                                    target="_blank"
                                    className="bg-black text-white p-2 rounded-full border-2 border-black transition-all duration-300 ease-in-out hover:opacity-75 inline-flex items-center justify-center"
                                >
                                    <FaPinterestP className="w-5 h-5"/>
                                </a>
                            </div>

                        </ul>
                        <div>

                        </div>
                    </div>
                </div>

            </nav>

        </header>

    )

}