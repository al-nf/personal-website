import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Learning } from "@/components/learning"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navigation />
            <main>
                <Hero />
                <About />
                <Education />
                <Experience />
                <Projects />
                <Learning />
                <Contact />
            </main>
        </div>
    )
}
