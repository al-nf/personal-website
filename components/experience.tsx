import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
    {
        title: "Undergraduate Researcher",
        company: "Santa Clara University Information Processing and Machine Learning Laboratory",
        period: "May 2025 - Present",
        description:
            "Finding the best model architectures and data processing techniques to improve machine learning in low-resource environments. Wrote scripts to generate spectrograms and built models for testing.",
        skills: ["NumPy", "Pandas", "PyTorch", "MATLAB", "Signal Processing"],
    },
]

export function Experience() {
    return (
        <section id="experience" className="py-24 px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-balance">Experience</h2>
                    </div>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <Card key={index} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                    <div>
                                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                                        <p className="text-accent font-medium">{exp.company}</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <Badge key={skill} variant="secondary">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
