"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Shield, Swords, Users, Target } from "lucide-react"

export function AllianceLore() {
  return (
    <section className="py-16 bg-muted/30" id="lore">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-4">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">ALLIANCE HISTORY</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 font-mono">The Origins of TKT</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to a dominant force in Kingshot
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold font-mono m-0">The Foundation</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  TKT Agency was founded by <span className="text-primary font-semibold">[TKT]ᴬᴳᴱᴺᵀ Younes</span> with a
                  vision to create not just another alliance, but a brotherhood of elite strategists and warriors. What
                  started as a small group of dedicated players quickly grew into one of the most respected alliances in
                  the kingdom.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <div className="flex items-center gap-3 mb-6">
                  <Swords className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold font-mono m-0">The First Wars</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our first major conflict came during the Swordland Showdown, where TKT proved its tactical
                  superiority. Led by officers <span className="text-primary font-semibold">[TKT]ᴬᴳᴱᴺᵀ Kornik</span> and{" "}
                  <span className="text-primary font-semibold">[TKT]ᴬᴳᴱᴺᵀ Patriot</span>, we secured key strategic
                  points and established our reputation as a force to be reckoned with.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-sm mt-4">
                  "We don't just play the game. We master it." - [TKT]ᴬᴳᴱᴺᵀ Younes
                </blockquote>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold font-mono m-0">The Culture</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  TKT is more than tactics and power. We're a community that values humor, camaraderie, and mutual
                  support. From Steel's legendary goose rally to Spoiikee's memorable moments, we celebrate both our
                  victories and our hilarious mistakes. This culture of learning and laughing together is what makes TKT
                  special.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold font-mono m-0">The Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Today, TKT Agency stands as a Top 10 alliance, respected by allies and feared by enemies. Our mission
                  remains unchanged: to dominate through superior strategy, unwavering teamwork, and continuous
                  improvement. We don't just participate in events—we set the standard for how they should be played.
                </p>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm font-mono text-primary m-0">
                    "In TKT, every member is an agent. Every battle is a mission. Every victory is earned together."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
