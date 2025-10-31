import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const educations = [
    {
        degree: "B.S. Electrical Engineering, Minor in Computer Science and Engineering",
        school: "Santa Clara University",
        period: "2024 - Present",
        description:
            "Emphasis on systems. Relevant coursework: Data Structures and Algorithms, Object Oriented Programming, Microprocessor System Design, Calculus IV, Differential Equations.",
        highlights: ["GPA: 3.8", "Undergraduate Research"],
    },
]

export function Education() {
    return (
        <section id="education" className="py-24 px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-balance">Education</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Formal training and academic highlights.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {educations.map((edu, index) => (
                            <Card key={index} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                    <div>
                                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                        <p className="text-accent font-medium">{edu.school}</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {edu.highlights.map((h) => (
                                        <Badge key={h} variant="secondary">
                                            {h}
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
