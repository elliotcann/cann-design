import Footer from "@/components/Footer"
import Image from "next/image"

const sections = [
    {
        title: "About CANN Design",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: "/about-main.jpg",
        alt: "About CANN Design",
    },
    {
        title: "Our Approach",
        body: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: "/about-profile.jpg",
        alt: "Our approach to design",
    },
    {
        title: "Our Team",
        body: "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: "/about-main.jpg",
        alt: "Our team",
    },
    {
        title: "Our Work",
        body: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: "/about-profile.jpg",
        alt: "Our work",
    },
]

export default function About() {

    return (

        <main>

            {sections.map((section, index) => (
                <div key={index} className="flex flex-col">

                    {/* IMAGE — responsive height */}
                    <div className="relative w-full h-[70vw] md:h-[70vh]">
                        <Image
                            src={section.image}
                            alt={section.alt}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* CONTENT — grows with text */}
                    <div className="flex items-center px-6 py-8 md:px-10 md:py-10">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">{section.title}</h2>
                            <p>{section.body}</p>
                        </div>
                    </div>

                </div>
            ))}

            <Footer />

        </main>

    )

}
