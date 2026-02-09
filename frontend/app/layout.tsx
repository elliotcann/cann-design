import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CANN Design",
  description: "CANN Design business and portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">

      <body className={dmSans.className}>

        {/* HEADER */}

          <header>

            <nav>

              <div>

                {/* Logo */}

                <Link href="">

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

                <Link>

                </Link>

              </div>

            </div>

          </div>
          
        </footer>

      </body>

    </html>

  );
}
