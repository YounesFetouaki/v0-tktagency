import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Shield, Users, MapPin, MessageSquare, Target } from "lucide-react"

const rules = [
  {
    icon: MapPin,
    title: "Respect of Territory & Access",
    points: ["Do not block access to alliance outposts", "Outposts must remain open for fair fight"],
  },
  {
    icon: Shield,
    title: "No Hostile Actions",
    points: [
      "Do not attack any player bearing a Top 10 alliance tag or their farms",
      "Scouting, rallying, or other aggressive actions are also considered violations",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Alliance Buildings Are a Red Line",
    points: [
      "Alliance buildings (HQ, banners) must never be attacked or interfered with",
      "Any action against alliance structures will be treated as a serious breach of the NAP",
    ],
  },
  {
    icon: Users,
    title: "Recruitment Boundaries",
    points: [
      "Do not approach members of Top 10 alliances to recruit or entice them into leaving their alliance",
      "Recruitment must focus on independent or unaffiliated players",
    ],
  },
  {
    icon: MessageSquare,
    title: "Conflict Resolution",
    points: [
      "If an issue arises, alliances are expected to communicate first before taking action",
      "Leaders should attempt to work out a fair agreement to avoid unnecessary conflict",
    ],
  },
  {
    icon: Target,
    title: "Goal of the Pact",
    points: [
      "The purpose of this NAP is to promote peace, growth, and stability across the server",
      "All Top 10 alliances benefit from cooperation and avoiding internal wars",
    ],
  },
]

const violations = [
  { level: "First Violation", consequence: "Formal warning issued to the alliance leader" },
  { level: "Second Violation", consequence: "Offending alliance must provide compensation (resources...)" },
  {
    level: "Third Violation",
    consequence:
      "The NAP is considered broken with that alliance, and all Top 10 alliances are free to take collective action",
  },
]

export function NAPRules() {
  return (
    <section className="border-t border-accent/20 bg-card/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">
            NAP <span className="text-accent">Protocol</span>
          </h2>
          <p className="text-sm font-mono text-muted-foreground tracking-wider">
            NON-AGGRESSION PACT FOR TOP 10 ALLIANCES
          </p>
        </div>

        <div className="space-y-6">
          <Card className="border-accent/30 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-card-foreground">
                <div className="rounded bg-accent/10 p-2 ring-1 ring-accent/20">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-bold">NAP Rules</div>
                  <div className="text-xs font-mono text-muted-foreground tracking-wider">
                    BINDING AGREEMENT FOR ALL TOP 10 ALLIANCES
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {rules.map((rule, index) => {
                  const Icon = rule.icon
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded border border-border/50 bg-background/50 p-4 transition-colors hover:border-accent/30"
                    >
                      <div className="rounded bg-accent/10 p-2 ring-1 ring-accent/20 flex-shrink-0">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-card-foreground">{rule.title}</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {rule.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="border-destructive/30 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl text-card-foreground">
                <div className="rounded bg-destructive/10 p-2 ring-1 ring-destructive/20">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <div className="font-bold">Violation Consequences</div>
                  <div className="text-xs font-mono text-muted-foreground tracking-wider">ESCALATING PENALTIES</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {violations.map((violation, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded border border-destructive/30 bg-destructive/5 p-4"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-destructive/20 font-mono text-sm font-bold text-destructive">
                      {index + 1}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-card-foreground">{violation.level}</h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">{violation.consequence}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
