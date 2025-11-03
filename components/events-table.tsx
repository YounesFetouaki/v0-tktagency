import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { events } from "@/lib/event-data"

const categoryColors: Record<string, string> = {
  War: "bg-accent/20 text-accent border-accent/30",
  Alliance: "bg-primary/20 text-primary border-primary/30",
  Competition: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  PvE: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Solo: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  Hero: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  Economy: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
}

export function EventsTable() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">
            Active <span className="text-primary">Operations</span>
          </h2>
          <p className="text-sm font-mono text-muted-foreground tracking-wider">CLASSIFIED EVENT DOSSIERS</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => {
            const Icon = event.icon
            return (
              <Card
                key={event.name}
                className="group relative overflow-hidden border-border bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="relative h-32 w-full overflow-hidden bg-muted/30">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.name}
                    className="h-full w-full object-cover opacity-60 transition-all group-hover:scale-105 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rotate-45 bg-primary/10 transition-transform group-hover:translate-x-6 group-hover:-translate-y-6" />
                <CardHeader>
                  <div className="mb-3 flex items-start justify-between">
                    <div className="rounded bg-primary/10 p-3 ring-1 ring-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className={categoryColors[event.category] || "bg-muted"}>
                      {event.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{event.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm font-mono">
                    <div className="flex justify-between border-b border-border/50 pb-1">
                      <span className="text-muted-foreground">FREQUENCY:</span>
                      <span className="font-medium text-foreground">{event.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">REWARDS:</span>
                      <span className="font-medium text-primary">{event.rewards}</span>
                    </div>
                  </div>
                  <Link href={`/events/${event.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent font-mono text-xs tracking-wider hover:bg-primary/10 hover:text-primary"
                    >
                      ACCESS FILE
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
