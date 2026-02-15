import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Menu, X} from 'lucide-react';

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CANN Design",
  description: "CANN Design business and portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">

      <body className={dmSans.className}>

        {/* HEADER */}

          <header className="fixed top-0 left-0 right-0 z-50">

            <nav className="max-w-7xl mx-auto px-6 py-4">

              <div className="flex items-center">

                {/* Logo */}
                <Link href="/">
                  <Image src="/header-logo.svg" alt="CANN Design logo" width={70} height={70} className="opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out"></Image>
                </Link>

                {/* Nav Links */}

                <ul className="flex w-full justify-center gap-6 md:gap-8">

                  <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out">
                    <Link href="/projects">
                      Projects
                    </Link>
                  </li>

                  <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out">
                    <Link href="/about">
                      About
                    </Link>
                  </li>

                  <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out">
                    <Link href="/collaborate">
                      Collaborate
                    </Link>
                  </li>

                  <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out">
                    <Link href="/rent">
                      Rent
                    </Link>
                  </li>

                  <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out">
                    <Link href="/teach">
                      Teach
                    </Link>
                  </li>

                  <li className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out">
                    <Link href="/contact">
                      Contact
                    </Link>
                  </li>

                </ul>

              </div>

            </nav>

          </header>
          {/* SPACER - prevents content from hiding under fixed header */}
          <div className="h-24"></div>


        {/* MAIN CONTENT - Where each page goes */}

        <main>

          {children}

        </main>

        {/* FOOTER */}

        <footer>

          <div className="font-bold text-sm bg-black text-white px-6 py-4">

            <div className="flex align-center justify-between">

              <p>
                CANN Design {new Date().getFullYear()} &copy;
              </p>

              <a href="mailto:hello@cann.design" target="_blank" className="opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out">
                  hello@cann.design
              </a>
                
              <Link href="/privacy" className="opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out">
                  Privacy Policy
              </Link>

            </div>

          </div>
          
        </footer>

      </body>

    </html>

  );
}
