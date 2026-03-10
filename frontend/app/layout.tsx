import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
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

    <html lang="en" className="scroll-smooth">

      <body className={dmSans.className}>

        {/* HEADER */}

        <Header />

        {/* MAIN CONTENT - Where each page goes */}

        <main>

          {children}

        </main>

      </body>

    </html>

  );
}
