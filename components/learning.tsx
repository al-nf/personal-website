import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const learningItems = [
    {
        topic: "Machine Learning",
        source: "IPML Lab",
        description:
            "Studying how and why model collapse occurs using a simple GAN trained on the very cute Stanford Dogs dataset. Reading about image upscaling methods to resolve GAN's miserably low output resolution.",
    },
    {
        topic: "AC Analysis",
        source: "ELEN 50 - Electric Circuits I",
        description:
            "Applying DC circuit analysis rules to AC is simple! They're all the same, but voltage and current are phasors now. Complex arithmetic is somewhat tedious, though.",
    },
    {
        topic: "Serial Interfaces",
        source: "ELEN 120 - Microprocessor System Design",
        description:
            "Communication protocols like SPI, I2C, and UART are surprisingly elegant - each makes different trade-offs between speed, pin count, and complexity.",
    },
]

export function Learning() {
    return (
        <section id="learning" className="py-24 px-6 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-balance">Currently Learning</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {learningItems.map((item, index) => (
                            <Card key={index} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold">{item.topic}</h3>
                                    <p className="text-sm text-accent font-medium">{item.source}</p>
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
