import Image from 'next/image'
import { MdEmail } from 'react-icons/md'
import { FaPinterestP } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import Footer from '@/components/Footer'
import { pillBtn } from '@/libs/styles'

const contacts = [
    {
        label: 'Email',
        href: 'mailto:hello@cann.design',
        icon: MdEmail,
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/cann.design/',
        icon: FiInstagram,
    },
    {
        label: 'Pinterest',
        href: 'https://uk.pinterest.com/cann_design/',
        icon: FaPinterestP,
    },
]

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col">

            {/* FULL SCREEN HERO */}
            <div className="relative flex-1 flex items-center justify-center">

                <Image
                    src="/collaborate.jpg"
                    alt="Contact CANN Design"
                    fill
                    className="object-cover"
                    priority
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40" />

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col items-center gap-8 text-center px-6">

                    <h1 className="text-5xl md:text-7xl font-bold text-white">Get In Touch</h1>

                    <div className="flex flex-col sm:flex-row gap-4">
                        {contacts.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noreferrer"
                                className={`${pillBtn} inline-flex items-center gap-2`}
                            >
                                <Icon size={16} />
                                {label}
                            </a>
                        ))}
                    </div>

                </div>

            </div>

            <Footer />

        </main>
    )
}
