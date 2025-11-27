import { Card } from "@/components/ui/card"
import { Link, Lightbulb, Rocket } from "lucide-react"

export function About() {
    return (
        <section id="about" className="py-24 px-6 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-balance">About Me</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                            I'm an electrical engineering student with a passion for building systems across the full stack—from firmware on ARM Cortex-M microcontrollers to cloud-native backends on AWS. My work spans embedded systems, machine learning research, and production infrastructure, always focused on creating robust, real-world solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                <Link className="h-6 w-6 text-accent" />
                            </div>
                            <h3 className="text-xl font-semibold">Collaborative</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Whenever I'm in a team, I always look to take charge when I can, but I also know when to take a step back. My strengths as a leader include planning, scheduling, and communication.
                            </p>
                        </Card>

                        <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                <Lightbulb className="h-6 w-6 text-accent" />
                            </div>
                            <h3 className="text-xl font-semibold">Adaptive</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Continuously expanding my technical range across embedded firmware, cloud architecture, machine learning research, and systems programming. Comfortable working anywhere from interrupt-driven microcontroller code to distributed AWS services.
                            </p>
                        </Card>

                        <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                <Rocket className="h-6 w-6 text-accent" />
                            </div>
                            <h3 className="text-xl font-semibold">Fast Learner</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Rapidly acquiring new skills across hardware and software domains. Self-taught in Go, Rust, AWS infrastructure, Linux systems administration, and bare-metal firmware development—moving from concept to implementation in days, not months.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
