import Link from "next/link"
import { pillBtn } from "@/libs/styles"


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
            className={`${pillBtn} inline-block`}
        >
            {label}
        </Link>
    )
}