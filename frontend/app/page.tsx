import { ChevronDown } from "lucide-react";
import Link from "next/link";

const homeContent = [
  { heading: 'The Studio', para: 'CANN Design is a creative collective in pursuit of storytelling, expression and experience within our built environment. We feed ourselves and others to progressively build ideas for our physical place and connection.', button: 'Read more here', background: '/home-1.jpg', scroll: 'section-2'},
  { heading: 'Collaborate With Us', para: 'An investor looking to pledge in the built environment? A landowner seeking to design and potentially build? A building owner looking to retrofit and transform? A brand, community or charity looking to create spatial identity? We seek project collaborations and joint venture business partnerships. Contact us here.', button: 'Read more here', background: '/home-2.jpg'},
  { heading: 'Rent Our Spaces', para: 'We create and develop our own places and spaces to share. You can use them to stay in, host events or for commercial photography and filming', button: 'Explore them here', background: '/home-3.jpg'},
  { heading: 'We Teach', para: 'We are keen knowledge sharers and collaborate across UK architecture schools through academic design studio mentoring and workshops. ', button: 'Explore our teaching work here', background: '/home-4.jpg'},
]
// Function to scroll to next section
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId); // Find the sction by its ID
  if (element) { // If the section exists
    element.scrollIntoView({
      behavior: 'smooth', // Scroll is smooth
      block: 'start' // Aligns to top of viewport
    })
  }
}

export default function Home() {
  return (
    
    <main className="min-h-screen min-w-screen flex flex-col bg-[url(/home-1.jpg)] bg-center bg-cover">

        {/* SPACER - prevents content from hiding under fixed header */}
        <div className="h-24"></div>

        <div className="flex-1 flex flex-col items-start justify-center text-white mx-8">
            <h2 className="text-lg font-bold pb-8">The Studio</h2>
            <p className="text-2xl font-bold pb-8">CANN Design is a creative collective in pursuit of storytelling, expression and experience within our built environment.<br /> <br />We feed ourselves and others to progressively build ideas for our physical place and connection.</p>
            <button className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full border-solid opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out">
              <Link href="/about">Read More</Link>
            </button>
        </div>

        <div className="flex justify-center mb-8">
          <button
            className="bg-black text-white p-2 rounded-full  opacity-100  transition-opacity hover:opacity-75 duration-300 ease-in-out"
            /* onClick={() => scrollToSection('section-2')} */
            aria-label="Next section"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>

    </main>

  );
}
