import Link from "next/link";


// Define the props this components accepts. "Props" are the settings we pass in when using the component

interface ButtonProps {
    href: string  // Where button links to
    label: string // The text inside the button
    onClick?: () => void // Optional click handler
}

export default function Button({ href, label, onClick }: ButtonProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full inline-block opacity-100 transition-opacity hover:opacity-75 duration-300 ease-in-out"
        >
            {label}
        </Link>
    )
}