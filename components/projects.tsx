import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Embark",
    description:
      "A platform to encourage users to explore California's national parks, raising awareness about the effects of climate change and wildfires on our parks.",
    image: "/embark.png",
    tags: ["SvelteKit", "Go", "Firebase", "OAuth 2.0"],
    github: "https://github.com/team-embark/embark",
  },
  {
    title: "Bons.ai",
    description: "An AI-powered study platform for students, featuring endless problem generation, a scoreboard to compete with friends, and LaTeX rendering.",
    image: "/bonsai.png",
    tags: ["React", "Go", "AWS", "MySQL", "Nix"],
    github: "https://github.com/bonsdotai/bons.ai",
  },
  {
    title: "Matrix calculator",
    description: "Command-line tool to quickly input matrices and calculate their determinants, products, and inverses. Developed because MATLAB takes too long to launch.",
    image: "/matrix.png",
    tags: ["Rust"],
    github: "https://github.com/al-nf/matrix",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Featured Projects</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A selection of projects I've worked on recently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    { 
                    /*
                    <Button size="sm" className="gap-2" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                    */
                    }
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
