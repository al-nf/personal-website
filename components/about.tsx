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
              I'm an engineer passionate about learning new things. I have been working on expanding my skills both in hardware and software. My strength lies in my flexibility to succeed with any team using a wide variety of tech.
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
                I'm always hunting to find a way to further expand and diversify my skillset. Through work in and out of school, I've explored machine learning, API development, FPGAs, and more.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Rocket className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Fast Learner</h3>
              <p className="text-muted-foreground leading-relaxed">
                Because I'm interested in so many things, I have honed my ability to quickly develop skills. Outside of school, I've had to learn programming languages (C++, Go, Rust) and developer tools (Git, Nix, AWS) in as little as hours.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
