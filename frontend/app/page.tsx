import { ChevronDown } from "lucide-react";

const homeContent = [
  { heading: 'The Studio', para: 'CANN Design is a creative collective in pursuit of storytelling, expression and experience within our built environment. We feed ourselves and others to progressively build ideas for our physical place and connection.', button: 'Read more here', background: '/home-1.jpg'},
  { heading: 'Collaborate With Us', para: 'An investor looking to pledge in the built environment? A landowner seeking to design and potentially build? A building owner looking to retrofit and transform? A brand, community or charity looking to create spatial identity? We seek project collaborations and joint venture business partnerships. Contact us here.', button: 'Read more here', background: '/home-2.jpg'},
  { heading: 'Rent Our Spaces', para: 'We create and develop our own places and spaces to share. You can use them to stay in, host events or for commercial photography and filming', button: 'Explore them here', background: '/home-3.jpg'},
  { heading: 'We Teach', para: 'We are keen knowledge sharers and collaborate across UK architecture schools through academic design studio mentoring and workshops. ', button: 'Explore our teaching work here', background: '/home-4.jpg'},
]

export default function Home() {
  return (
    
    <main>
      <section className="bg-[url(/home-1.jpg)] bg-center bg-cover">
        <div className="min-h-screen min-w-screen">
          <h2>The Studio</h2>
          <p>CANN Design is a creative collective in pursuit of storytelling, expression and experience within our built environment. We feed ourselves and others to progressively build ideas for our physical place and connection.</p>
          <button>Read more here</button>
        </div>
      </section>
    </main>

  );
}
