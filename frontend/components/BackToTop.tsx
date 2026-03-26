"use client"

import { useState, useEffect, useRef } from "react"
import { FiChevronUp } from "react-icons/fi"
import { roundIconBtn } from "@/libs/styles"

// Floats above the footer and scrolls back to the top. Appears after scrolling 400px.
export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)
    const [aboveFooter, setAboveFooter] = useState(false)
    const footerHeightRef = useRef(0)

    useEffect(() => {
        const footer = document.querySelector("footer")

        const handleScroll = () => {
            if (footer) footerHeightRef.current = footer.offsetHeight
            setIsVisible(window.scrollY > 400)
            setAboveFooter(!!footer && footer.getBoundingClientRect().top <= window.innerHeight)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        window.addEventListener("resize", handleScroll, { passive: true })
        handleScroll()
        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleScroll)
        }
    }, [])

    if (!isVisible) return null

    const bottom = aboveFooter ? footerHeightRef.current + 16 : 24

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`fixed z-50 right-6 cursor-pointer ${roundIconBtn}`}
            style={{ bottom: `${bottom}px`, transition: "bottom 0.2s ease" }}
            aria-label="Back to top"
        >
            <FiChevronUp className="w-5 h-5" />
        </button>
    )
}
