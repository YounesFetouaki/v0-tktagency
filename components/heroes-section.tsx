import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { heroes } from "@/lib/hero-data"

const roleColors: Record<string, string> = {
  "Rally Captain": "bg-accent/20 text-accent border-accent/30",
  "Rally Joiner": "bg-primary/20 text-primary border-primary/30",
  "Rally Captain / Joiner": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Defense: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Support: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
}

export function HeroesSection() {
  return (
    <section className="border-t border-primary/20 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">
            Hero <span className="text-primary">Intelligence</span>
          </h2>
          <p className="text-sm font-mono text-muted-foreground tracking-wider">CLASSIFIED HERO DOSSIERS</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {heroes.map((hero) => {
            const Icon = hero.icon
            return (
              <Card
                key={hero.name}
                className="group relative overflow-hidden border-border bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="relative h-48 w-full overflow-hidden bg-muted/30">
                  <img
                    src={hero.image || "/placeholder.svg"}
                    alt={hero.name}
                    className="h-full w-full object-cover opacity-80 transition-all group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rotate-45 bg-primary/10 transition-transform group-hover:translate-x-6 group-hover:-translate-y-6" />
                <CardHeader>
                  <div className="mb-3 flex items-start justify-between">
                    <div className="rounded bg-primary/10 p-3 ring-1 ring-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className={roleColors[hero.role] || "bg-muted"}>
                      {hero.role}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{hero.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{hero.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-border/50 pb-1">
                      <span className="text-muted-foreground font-mono">GENERATION:</span>
                      <span className="font-medium text-foreground">{hero.generation}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-muted-foreground font-mono text-xs">STRENGTHS:</span>
                      <div className="flex flex-wrap gap-1">
                        {hero.strengths.map((strength) => (
                          <Badge key={strength} variant="secondary" className="text-xs">
                            {strength}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-muted-foreground font-mono text-xs">BEST FOR:</span>
                      <div className="flex flex-wrap gap-1">
                        {hero.bestFor.map((event) => (
                          <Badge key={event} variant="outline" className="text-xs bg-primary/5">
                            {event}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
