import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="container mx-auto max-w-4xl">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
                            Hi, I'm <span className="text-accent">Alan</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground text-balance">
                            Engineer & Software Developer
                        </p>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                        I am a self-motivated electrical engineering undergraduate focusing on embedded systems, with an interest in higher-level software such as machine learning and backend engineering. Passionate about building practical solutions that make a difference.
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                        <a
                            href="https://github.com/al-nf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/alan-kj-fung"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            href="mailto:alankjfung@gmail.com"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
