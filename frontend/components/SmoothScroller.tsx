"use client"

import { useState, useEffect, useRef } from "react"
import { FiChevronUp } from "react-icons/fi"
import { roundIconBtn } from "@/libs/styles"

interface Props {
    children: React.ReactNode[]
}

// Full-page scroll carousel. Traps wheel events and slides between sections.
export default function SmoothScroller({ children }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const isScrolling = useRef(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault()
            if (isScrolling.current) return

            const next = currentIndex + (e.deltaY > 0 ? 1 : -1)
            if (next < 0 || next >= children.length) return

            setCurrentIndex(next)
            isScrolling.current = true
            // Unblock after the CSS transition completes — must match duration-1000 below
            setTimeout(() => { isScrolling.current = false }, 1000)
        }

        const container = containerRef.current
        container?.addEventListener("wheel", handleWheel, { passive: false })
        return () => container?.removeEventListener("wheel", handleWheel)
    }, [currentIndex, children.length])

    const goToTop = () => {
        setCurrentIndex(0)
        isScrolling.current = true
        setTimeout(() => { isScrolling.current = false }, 1000)
    }

    return (
        <div ref={containerRef} className="h-screen overflow-hidden">
            <div
                className="transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
            >
                {children}
            </div>

            {currentIndex > 0 && (
                <button
                    onClick={goToTop}
                    className={`fixed z-50 right-6 bottom-6 cursor-pointer ${roundIconBtn}`}
                    aria-label="Back to top"
                >
                    <FiChevronUp className="w-5 h-5" />
                </button>
            )}
        </div>
    )
}
