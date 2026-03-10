"use client"; // This component is using browser features such as scrolling, window. So run it on client and not server!

import { useState, useEffect } from "react"; // 'useState' lets us remember a value that can change. 'useEffect' lets us run code when something happens

import { ChevronUp } from "lucide-react"; // Imports up chevron from icon pack we are using

interface Props {
    currentIndex?: number;
    onBackToTop?: () => void;
}

export default function BackToTop({ currentIndex, onBackToTop }: Props) {

    const [isVisible, setIsVisible] = useState(false); // 'isVisible' is our memory, it tracks whether the button should show or hide
    // 'useState(false)' means start hidden (false = not visible). 'setIsVisible' is the function we call to UPDATE that memory

    useEffect(() => {  // useEffect runs code outside of rendering. Here we use it to add a scroll listener when the component loads and remove it when the component is removed
        if (currentIndex !== undefined) return; // Only run this on normal pages when an Index is not passed in. Skips it on pages with SmoothScroller

        const handleScroll = () => {
            if (window.scrollY > 400) { // 'window.scrollY' how many pixels the user has scrolled. If the scrolled more than 400px, show the button
                setIsVisible(true); // Update state to true -> button appears
            } else {
                setIsVisible(false); // Update state to false -> button disappears
            }
        };

        window.addEventListener("scroll", handleScroll); // Attach a listener: everytime a user scrolls, call handleScroll

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };  // When this component is removed from the page, remove the event listener so it does not keep running in the background

    }, []); // The empty [] means: Only run this effect once, when the component first loads


    // SMOOTHSCROLLER PAGE - If currentIndex was passed in then were in a SmoothScroller page
    if(currentIndex !== undefined) {
        if(currentIndex === 0) return null;
        return (
            <button
                onClick={onBackToTop} // Use the function SmoothScroller gave us
                className="fixed bottom-8 right-8 z-50 bg-black text-white p-3 rounded-full opacity-100 hover:opacity-75 transition-opacity duration-300 ease-in-out"
                aria-label="Back to top"
            >
                <ChevronUp className="w-6 h-6" />
            </button>
        );
    

    }

    // NORMAL PAGE - No currentIndex passed in so use window.scrollY logic
    if (!isVisible) return null; // If isVisible is false, return null -> render nothing (button is hidden)

    return ( // Otherwise, render the button!
        <button
            onClick={() => window.scrollTo({ top:0, behavior: "smooth"})} // Calls 'scrollToTop' when button is clicked
            className="fixed bottom-8 right-8 z-50 bg-black text-white p-3 rounded-full opacity-100 hover:opacity-75 transition-opacity duration-300 ease-in-out" // Custom Tailwind for button styling
            aria-label="Back to top" // Accessability that tells screen readers what the button does
        >
            <ChevronUp className="w-6 h-6" />
        </button> 
    );
}

