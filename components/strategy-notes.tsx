import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Clock, Target, Users, Zap, Shield } from "lucide-react"

const notes = [
  {
    icon: Zap,
    text: "Always save speedups before Power or Build events.",
  },
  {
    icon: Users,
    text: "Coordinate rallies during Kill and Rally events.",
  },
  {
    icon: Target,
    text: "Assign Rally Leaders (Amadeus, Helga) strategically.",
  },
  {
    icon: Shield,
    text: "Focus on archers for maximum efficiency in PvP.",
  },
  {
    icon: AlertCircle,
    text: "Participate daily in resource events for free rewards.",
  },
  {
    icon: Clock,
    text: "Check event timers — reset occurs at 00:00 UTC.",
  },
]

export function StrategyNotes() {
  return (
    <section className="border-t border-primary/20 bg-card/30 py-16">
      <div className="container mx-auto px-4">
        <Card className="border-primary/30 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-2xl text-card-foreground">
                <div className="rounded bg-accent/10 p-2 ring-1 ring-accent/20">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-bold">Tactical Directives</div>
                  <div className="text-xs font-mono text-muted-foreground tracking-wider">FOR TKT OPERATIVES ONLY</div>
                </div>
              </CardTitle>
              <div className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1">
                <span className="text-xs font-mono text-accent">CONFIDENTIAL</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {notes.map((note, index) => {
                const Icon = note.icon
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded border border-border/50 bg-background/50 p-3 transition-colors hover:border-primary/30"
                  >
                    <div className="rounded bg-primary/10 p-2 ring-1 ring-primary/20">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm leading-relaxed text-card-foreground">{note.text}</p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function FileText(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  )
}
