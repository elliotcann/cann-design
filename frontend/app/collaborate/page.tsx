"use client"

import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

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

    const [openId, setOpenId] = useState<number | null>(null)

    // Toggle: clicking an open item closes it; clicking a closed item opens it (and closes any other)
    const handleClick = (id: number) => {
        setOpenId(openId === id ? null : id)
    }

    return (
        <main className="min-h-screen flex flex-col">

            <div className="h-24" />

            <div className="flex-1 px-6 py-8 flex flex-col gap-6">

                <h2 className="text-bold text-lg py-4">We create and develop our own places and spaces to share. You can use them to stay in, host events or for commercial photography and filming</h2>   

                {collaborations.map((item, index) => {

                    const isOpen = openId === item.id

                    return (
                        <motion.div
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            className={`relative overflow-hidden cursor-pointer transition-[min-height] duration-500 ease-in-out bg-cover bg-center flex flex-col ${isOpen ? 'min-h-[400px]' : 'min-h-[120px]'}`}
                            style={{ backgroundImage: `url(${item.image})` }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut"}}
                            viewport={{ once: true }}
                        >
                            <div className="absolute inset-0 bg-black/40" />

                            <div className="relative z-10 flex flex-col justify-start flex-1 p-6">

                                <div className="flex items-center justify-between gap-4">
                                    <h2 className="text-white font-bold text-2xl md:text-3xl">{item.title}</h2>
                                    <div className="bg-black rounded-full p-2 border-2 border-black flex-shrink-0">
                                        {isOpen
                                            ? <FiMinus className="text-white w-5 h-5 flex-shrink-0" />
                                            : <FiPlus className="text-white w-5 h-5 flex-shrink-0" />
                                        }
                                    </div>
                                </div>

                                {/* CSS accordion: grid-rows-[0fr] collapses the row to 0 height, [1fr] expands it.
                                    The inner div needs overflow-hidden to actually clip the content when collapsed. */}
                                <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-6' : 'grid-rows-[0fr]'}`}>
                                    <div className="overflow-hidden">
                                        <p className="text-white text-lg">
                                            {item.body}
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </motion.div>
                    )
                })}

            </div>

            <Footer />
        </main>
    )
}