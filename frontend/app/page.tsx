import Button from "@/components/Button";
import { ChevronDown } from "lucide-react";

const homeContent = [
  { id: 'about',
    heading: 'About Us',
    para: 'CANN Design is a creative collective in pursuit of storytelling, expression and experience within our built environment. We feed ourselves and others to progressively build ideas for our physical place and connection.',
    button: 'Read more here',
    href: '/about',
    background: '/home-1.jpg',
  },
  { id: 'collaborate',
    heading: 'Collaborate With Us',
    para: 'An investor looking to pledge in the built environment? A landowner seeking to design and potentially build? A building owner looking to retrofit and transform? A brand, community or charity looking to create spatial identity? We seek project collaborations and joint venture business partnerships. Contact us here.',
    button: 'Read more here',
    href: '/collaborate',
    background: '/home-2.jpg',
  },
  { id: 'rent',
    heading: 'Rent Our Spaces',
    para: 'We create and develop our own places and spaces to share. You can use them to stay in, host events or for commercial photography and filming',
    button: 'Explore them here',
    href: '/rent',
    background: '/home-3.jpg',
  },
  { id: 'teach',
    heading: 'We Teach',
    para: 'We are keen knowledge sharers and collaborate across UK architecture schools through academic design studio mentoring and workshops. ',
    button: 'Explore our teaching work here',
    href: '/teach',
    background: '/home-4.jpg',
  },
]

export default function Home() {
  return (
    
    <main>
        
        {homeContent.map((content, index) => {
          const nextContent = homeContent[index + 1];
          const nextId = nextContent?.id;

          return (
          <section 
            key={content.heading}
            id={content.id}
            className="min-h-screen min-w-screen bg-center bg-cover flex flex-col" 
            style={{ backgroundImage: `url(${content.background})` }}
          >

            <div className="h-24"></div>
            
            <div className="flex-1 flex flex-col items-start justify-center text-white mx-8">
                <h2 className="text-lg font-bold pb-8">{content.heading}</h2>
                <p className="text-2xl font-bold pb-8">{content.para}</p>
                <Button
                  href={content.href}
                  label={content.button}
                />
            </div>
            

            <div className="flex justify-center mb-8">
              {nextId && (
                <a
                  href={`#${nextId}`}
                  aria-label="Next section"
                  className="bg-black text-white p-2 rounded-full opacity-100 transition-opacity hover:opacity-75 duration-300 ease-in-out"
                >
                  <ChevronDown className="w-6 h-6" />
                </a>
              )}  
            </div>

          </section>
          )
        })}

    </main>

  );
}
