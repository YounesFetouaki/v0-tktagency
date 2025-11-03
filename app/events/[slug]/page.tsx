import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { eventDetails } from "@/lib/event-data"

export function generateStaticParams() {
  return Object.keys(eventDetails).map((slug) => ({
    slug,
  }))
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = eventDetails[params.slug]

  if (!event) {
    notFound()
  }

  const Icon = event.icon

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6 font-mono text-xs tracking-wider hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            BACK TO OPERATIONS
          </Button>
        </Link>

        <div className="mb-8">
          <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg border border-border bg-muted/30">
            <img
              src={event.image || "/placeholder.svg"}
              alt={event.name}
              className="h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-4">
              <div className="rounded bg-primary/20 p-4 ring-2 ring-primary/30">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground">{event.name}</h1>
                <p className="font-mono text-sm text-muted-foreground tracking-wider">CLASSIFIED OPERATION BRIEF</p>
              </div>
            </div>
          </div>

          <div className="mb-6 flex flex-wrap gap-3">
            <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 font-mono">
              {event.category}
            </Badge>
            <Badge variant="outline" className="bg-accent/20 text-accent border-accent/30 font-mono">
              {event.frequency}
            </Badge>
            <Badge variant="outline" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 font-mono">
              {event.rewards}
            </Badge>
          </div>

          <p className="text-lg text-muted-foreground mb-8">{event.description}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {event.images && event.images.length > 0 && (
              <Card className="border-border bg-card/50 backdrop-blur-sm border-primary/30">
                <CardHeader>
                  <CardTitle className="text-xl text-primary font-mono tracking-wider">CLASSIFIED INTEL</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {event.images.map((image, index) => (
                    <div key={index} className="space-y-2">
                      <div className="relative overflow-hidden rounded-lg border border-border/50 bg-muted/30">
                        <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-auto" />
                      </div>
                      <p className="text-sm text-muted-foreground font-mono">{image.caption}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {event.sections.map((section, index) => (
              <Card key={index} className="border-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-primary font-mono tracking-wider">{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {section.content.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      {item.subtitle && <h4 className="font-semibold text-foreground text-base">{item.subtitle}</h4>}
                      {item.text && <p className="text-muted-foreground leading-relaxed">{item.text}</p>}
                      {item.list && (
                        <ul className="space-y-2 ml-4">
                          {item.list.map((listItem, listIdx) => (
                            <li key={listIdx} className="text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">▸</span>
                              <span className="leading-relaxed">{listItem}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            {event.quickFacts && (
              <Card className="border-border bg-card/50 backdrop-blur-sm sticky top-6">
                <CardHeader>
                  <CardTitle className="text-lg text-primary font-mono tracking-wider">QUICK FACTS</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {event.quickFacts.map((fact, index) => (
                    <div key={index} className="border-b border-border/50 pb-3 last:border-0 last:pb-0">
                      <p className="text-xs font-mono text-muted-foreground mb-1">{fact.label}</p>
                      <p className="text-sm font-medium text-foreground">{fact.value}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {event.tips && (
              <Card className="border-border bg-card/50 backdrop-blur-sm border-primary/30">
                <CardHeader>
                  <CardTitle className="text-lg text-primary font-mono tracking-wider">AGENT TIPS</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {event.tips.map((tip, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">●</span>
                        <span className="leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
