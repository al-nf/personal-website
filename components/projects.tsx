import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
    {
        title: "Bons.ai",
        description: "Production-grade REST API powering an AI study platform. Built secure authentication with Aurora MySQL and JWTs, integrated Amazon Bedrock's GPT-120B for LaTeX math generation, and deployed on AWS Elastic Beanstalk with reproducible Nix environments.",
        image: "/bonsai.png",
        tags: ["Go", "AWS", "Aurora MySQL", "Bedrock AI", "Nix"],
        github: "https://github.com/bonsdotai/bons.ai",
    },
    {
        title: "Personal Homelab",
        description: "Self-hosted infrastructure with Raspberry Pi and Linux hosts. Developed Go-based Wake-on-LAN server, implemented systemd services for automation, and created Discord-integrated microcontroller control system—all secured via Tailscale zero-trust networking.",
        image: "/homelab.png",
        tags: ["Go", "Linux", "Raspberry Pi", "Tailscale", "systemd"],
        github: "https://github.com/al-nf",
    },
    {
        title: "LED Light Strip Controller",
        description: "Bare-metal embedded system on STM32 ARM Cortex-M. Implemented interrupt-driven joystick input via EXTI, built software SPI driver from scratch to control 60-LED SK9822 RGB strip with real-time pattern updates.",
        image: "/led-controller.png",
        tags: ["STM32", "ARM32", "C", "SPI", "Embedded"],
        github: "https://github.com/al-nf",
    },
    {
        title: "Embark",
        description: "RESTful API built in 24 hours for a hackathon finalist project among 50+ teams. Implemented Google OAuth authentication and integrated Firebase SDK for document-oriented data management in a California national parks exploration platform.",
        image: "/embark.png",
        tags: ["Go", "Firebase", "OAuth 2.0", "REST API"],
        github: "https://github.com/team-embark/embark",
    },
    {
        title: "Waveform Modulator",
        description: "STM32-based signal generator using dual ADCs to sample potentiometer inputs for frequency and amplitude control. Generated modulated waveforms via DAC with timer-driven updates, validated on oscilloscope.",
        image: "/waveform.png",
        tags: ["STM32", "ARM32", "ADC/DAC", "C"],
        github: "https://github.com/al-nf",
    },
]

export function Projects() {
    return (
        <section id="projects" className="py-24 px-6 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-balance">Featured Projects</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                                {/* <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                /> */}
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
