import Footer from "@/components/Footer"
import Image from "next/image"

export default function About() {

    return (

        <main>

            {/* HERO IMAGE with gradient fade */}
            <div className="relative">
                <Image
                    src="/about-main.jpg"
                    alt="Main header image for the about page"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="object-cover object-center"
                    style={{ width: "100%", height: '800px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
            </div>

            {/* CONTENT */}
            <div className="px-8 pb-16">

                <h1 className="text-3xl font-bold pb-8">About CANN Design</h1>

                <div className="md:flex md:flex-row md:items-start md:gap-8">
                    <Image
                        src="/about-profile.jpg"
                        alt="Profile photo"
                        width={200}
                        height={200}
                        className="object-cover object-center flex-shrink-0"
                    />
                    <p className="pt-6 md:pt-0">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>

            </div>

            <Footer />

        </main>

    )

}