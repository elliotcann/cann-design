import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

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

          <header>

            <nav>

              <div>

                {/* Logo */}

                <Link href="/">
                  <Image src="/header-logo.svg" alt="CANN Design logo" width={60} height={60}></Image>
                </Link>

                {/* Nav Links */}

                <ul>

                  {/*<Link>

                  </Link>

                  <Link>

                  </Link>

                  <Link>

                  </Link>

                  <Link>

                  </Link>

                  <Link>

                  </Link>

                  <Link>

                  </Link>*/}

                </ul>

              </div>

            </nav>

          </header>



        {/* MAIN CONTENT - Where each page goes */}

        <main>

          {children}

        </main>

        {/* FOOTER */}

        <footer>

          <div>

            <div>

              <p>

              </p>

              <div>

                <a>

                </a>

                {/*<Link>

                </Link>*/}

              </div>

            </div>

          </div>
          
        </footer>

      </body>

    </html>

  );
}
