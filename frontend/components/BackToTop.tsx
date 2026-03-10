"use client"; // This component is using browser features such as scrolling, window. So run it on client and not server!

import { useState, useEffect } from "react"; // 'useState' lets us remember a value that can change. 'useEffect' lets us run code when something happens

import { ChevronUp } from "lucide-react"; // Imports up chevron from icon pack we are using

export default function BackToTop() {

    const [isVisible, setIsVisible] = useState(false); // 'isVisible' is our memory, it tracks whether the button should show or hide
    // 'useState(false)' means start hidden (false = not visible). 'setIsVisible' is the function we call to UPDATE that memory

    useEffect(() => {  // useEffect runs code outside of rendering. Here we use it to add a scroll listener when the component loads and remove it when the component is removed

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

    const scrollToTop = () => { // This function runs when the button is clicked
        window.scrollTo({
            top: 0, // Scroll to the very top of the page
            behavior: "smooth", // Scroll smoothly, not instantly
        });
    };

    if (!isVisible) return null; // If isVisible is false, return null -> render nothing (button is hidden)

    
    return ( // Otherwise, render the button!
        <button
            onClick={scrollToTop} // Calls 'scrollToTop' when button is clicked
            className="fixed bottom-8 right-8 z-50 bg-black text-white p-3 rounded-full opacity-100 hover:opacity-75 transition-opacity duration-300 ease-in-out" // Custom Tailwind for button styling
            aria-label="Back to top" // Accessability that tells screen readers what the button does
        >
            <ChevronUp className="w-6 h-6" />
        </button> 
    );
}

