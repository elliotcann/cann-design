import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";

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

        <Header />

          
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
