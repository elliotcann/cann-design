"use client"

import { useRouter } from 'next/navigation'
import { FiX } from 'react-icons/fi'
import { roundIconBtn } from '@/libs/styles'

export default function CloseButton() {
    const router = useRouter()
    return (
        <button
            onClick={() => router.back()}
            className={`fixed top-24 right-6 z-40 cursor-pointer ${roundIconBtn}`}
            aria-label="Go back"
        >
            <FiX className="w-5 h-5" />
        </button>
    )
}
