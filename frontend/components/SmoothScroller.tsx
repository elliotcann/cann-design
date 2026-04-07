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
    const touchStartY = useRef<number | null>(null)

    useEffect(() => {
        const navigate = (direction: 1 | -1) => {
            if (isScrolling.current) return
            const next = currentIndex + direction
            if (next < 0 || next >= children.length) return
            setCurrentIndex(next)
            isScrolling.current = true
            setTimeout(() => { isScrolling.current = false }, 1000)
        }

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault()
            navigate(e.deltaY > 0 ? 1 : -1)
        }

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY.current = e.touches[0].clientY
        }

        const handleTouchEnd = (e: TouchEvent) => {
            if (touchStartY.current === null) return
            const delta = touchStartY.current - e.changedTouches[0].clientY
            // Require a minimum 50px swipe to trigger
            if (Math.abs(delta) < 50) return
            navigate(delta > 0 ? 1 : -1)
            touchStartY.current = null
        }

        const container = containerRef.current
        container?.addEventListener("wheel", handleWheel, { passive: false })
        container?.addEventListener("touchstart", handleTouchStart, { passive: true })
        container?.addEventListener("touchend", handleTouchEnd, { passive: true })
        return () => {
            container?.removeEventListener("wheel", handleWheel)
            container?.removeEventListener("touchstart", handleTouchStart)
            container?.removeEventListener("touchend", handleTouchEnd)
        }
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
