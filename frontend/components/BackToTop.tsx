"use client";

import { useState, useEffect, useRef } from "react";
import { FiChevronUp } from "react-icons/fi";

interface Props {
    currentIndex?: number;
    onBackToTop?: () => void;
}

export default function BackToTop({ currentIndex, onBackToTop }: Props) {
    const [isVisible, setIsVisible] = useState(false);
    const [aboveFooter, setAboveFooter] = useState(false);
    const footerHeightRef = useRef(0);

    useEffect(() => {
        if (currentIndex !== undefined) return;

        const footer = document.querySelector("footer");
        if (footer) footerHeightRef.current = footer.offsetHeight;

        const handleScroll = () => {
            setIsVisible(window.scrollY > 400);
            setAboveFooter(!!footer && footer.getBoundingClientRect().top <= window.innerHeight);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const bottom = aboveFooter ? footerHeightRef.current + 16 : 24;
    const className = "fixed z-50 right-6 bg-black text-white p-2 rounded-full border-2 border-black opacity-100 hover:opacity-75 transition-opacity duration-300 ease-in-out cursor-pointer";
    const style = { bottom: `${bottom}px`, transition: "bottom 0.2s ease" };

    if (currentIndex !== undefined) {
        if (currentIndex === 0) return null;
        return (
            <button onClick={onBackToTop} className={className} style={style} aria-label="Back to top">
                <FiChevronUp className="w-6 h-6" />
            </button>
        );
    }

    if (!isVisible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={className}
            style={style}
            aria-label="Back to top"
        >
            <FiChevronUp className="w-5 h-5" />
        </button>
    );
}
