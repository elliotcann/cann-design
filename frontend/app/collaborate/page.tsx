"use client"

import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import Footer from '@/components/Footer'

// --- CONTENT ---
// Hardcoded for now, easy to swap for Sanity later
const collaborations = [
    {
        id: 1,
        title: 'An investor looking to pledge in the built environment',
        body: 'We partner with investors who want to back meaningful built environment projects. Whether you\'re looking for returns through development, retrofit, or spatial innovation — we want to hear from you.',
        image: '/collaborate.jpg',
    },
    {
        id: 2,
        title: 'A landowner seeking to design and potentially build',
        body: 'Got land? We work with landowners to unlock the potential of a site — from early design thinking through to planning and delivery partnerships.',
        image: '/collaborate.jpg',
    },
    {
        id: 3,
        title: 'A building owner looking to retrofit and transform',
        body: 'Existing buildings hold enormous potential. We collaborate with owners to reimagine and transform spaces — sustainably, beautifully, and with purpose.',
        image: '/collaborate.jpg',
    },
    {
        id: 4,
        title: 'A brand, community or charity looking to create spatial identity',
        body: 'Space can be a powerful expression of who you are. We work with brands, communities and charities to create environments that tell your story.',
        image: '/collaborate.jpg',
    },
        {
        id: 5,
        title: 'A brand, community or charity looking to create spatial identity',
        body: 'Space can be a powerful expression of who you are. We work with brands, communities and charities to create environments that tell your story.',
        image: '/collaborate.jpg',
    },
]

export default function CollaboratePage() {

    // Track which box is open. null = none open.
    // We store the id of the open item, not a true/false per item.
    // This means only ONE can ever be open — setting a new id automatically
    // "closes" the previous one because it no longer matches.
    const [openId, setOpenId] = useState<number | null>(null)

    const handleClick = (id: number) => {
        // If you click the already-open box, close it. Otherwise open the new one.
        setOpenId(openId === id ? null : id)
    }

    return (
        <main className="min-h-screen flex flex-col">

            {/* Spacer for fixed header */}
            <div className="h-24" />

            <div className="flex-1 px-6 py-8 flex flex-col gap-6">

                {collaborations.map((item) => {

                    // Is THIS item the open one?
                    const isOpen = openId === item.id

                    return (
                        <div
                            key={item.id}
                            // The box grows in height when open using grid trick
                            // same technique as your mobile nav!
                            className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 ease-in-out bg-cover bg-center flex flex-col ${isOpen ? 'min-h-[500px]' : 'min-h-[120px]'}`}
                            style={{ backgroundImage: `url(${item.image})` }}
                            onClick={() => handleClick(item.id)}
                        >
                            {/* Dark overlay so text is always readable over the image */}
                            <div className="absolute inset-0 bg-black/50" />

                            {/* Content sits above the overlay using z-10 */}
                            <div className="relative z-10 flex flex-col justify-start flex-1 p-6">

                                {/* TOP ROW — title + icon */}
                                <div className="flex items-center justify-between gap-4 ${!isOpen ? 'flex-1' : ''}">
                                    <h2 className="text-white font-bold text-2xl md:text-3xl">{item.title}</h2>
                                    {/* Plus becomes minus when open */}
                                    {isOpen
                                        ? <FiMinus className="bg-black rounded-full p-2 text-white w-6 h-6 flex-shrink-0" />
                                        : <FiPlus className="bg-black rounded-full p-2 text-white w-6 h-6 flex-shrink-0" />
                                    }
                                </div>

                                {/* BODY TEXT — only visible when open */}
                                {/* Same grid trick as mobile nav for smooth animation */}
                                <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-6' : 'grid-rows-[0fr]'}`}>
                                    <div className="overflow-hidden">
                                        <p className="text-white/80 text-base leading-relaxed">
                                            {item.body}
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    )
                })}

            </div>

            <Footer />
        </main>
    )
}