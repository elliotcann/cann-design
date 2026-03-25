import Link from 'next/link';

export default function Footer() {

    return (
        
        <footer>

          <div className="font-bold text-sm bg-black text-white px-6 py-4">

            <div className="flex md:flex-row flex-col items-center justify-between tracking-wide">

              <p className="mb-2 md:mb-0">
                CANN Design {new Date().getFullYear()} &copy;
              </p>

              <a href="mailto:hello@cann.design" target="_blank" className="mb-2 md:mb-0 opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out">
                  hello@cann.design
              </a>
                  
              <Link href="/privacy" className="opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out">
                  Privacy Policy
              </Link>

            </div>

          </div>
          
        </footer>
    
    )

}