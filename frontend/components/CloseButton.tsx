"use client"

import { useRouter } from 'next/navigation'
import { FiX } from 'react-icons/fi'

export default function CloseButton() {
    const router = useRouter()
    return (
        <button
            onClick={() => router.back()}
            className="fixed top-24 right-6 z-40 bg-black text-white p-2 rounded-full border-2 border-black opacity-100 hover:opacity-75 transition-opacity duration-300 ease-in-out cursor-pointer"
            aria-label="Go back"
        >
            <FiX className="w-5 h-5" />
        </button>
    )
}
