import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, TrendingUp, Shield, Package } from "lucide-react"

export function TroopGuide() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Troop Training vs. Promotion</h2>
          <p className="text-muted-foreground text-lg">Which One is Better and When?</p>
          <p className="text-sm text-muted-foreground mt-2">March 26, 2025 by Daryl</p>
        </div>

        <Card className="mb-8 border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              The Golden Rule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-card-foreground leading-relaxed">
              In general, you should <strong>always train your second-highest level troops</strong> and save promotions
              for big events like <strong>HoG, KvK, and Strongest Governor</strong>. That's because promoting troops
              during these events gives more points than just training new ones using the same amount of speedups.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="text-sm font-medium">
                Once you've unlocked Level 7 (T7) troops, train T6 and promote them to T7 during events. Same goes for
                higher tiers — once you unlock T9, train T8 and promote them during major events for maximum points and
                a chance at the leaderboard.
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Check the{" "}
              <a
                href="https://kingshotcalculator.com/troop-training-and-promotion-calculator/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Troop Training Calculator
              </a>{" "}
              to verify the math yourself.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="h-5 w-5 text-destructive" />
                Infirmary Capacity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-card-foreground leading-relaxed">
                If you have both low and high-level troops, getting hit in battle can be risky. The infirmary has
                limited space, and <strong>lower-tier troops will fill it up first</strong> — meaning your stronger
                troops might get permanently lost.
              </p>
              <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded">
                <p className="text-sm font-medium text-destructive">
                  Keep lower-level troops to a minimum by promoting them during HoG, KvK, and Strongest Governor events.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Package className="h-5 w-5 text-primary" />
                Troop Load
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-card-foreground leading-relaxed">
                Higher-tier troops carry more resources, which makes them way more efficient for gathering and raiding.
              </p>
              <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded">
                <p className="text-sm font-medium text-primary">
                  Having more high-tier troops helps a lot when farming or looting resources.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-accent/30 bg-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-accent" />
              Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-card-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>
                  <strong>Train second-highest tier troops</strong> (T6 when you have T7, T8 when you have T9)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>
                  <strong>Save promotions for major events</strong> (HoG, KvK, Strongest Governor) for maximum points
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>
                  <strong>Minimize low-tier troops</strong> to protect your infirmary capacity
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>
                  <strong>Higher-tier troops = better resource gathering</strong> and raiding efficiency
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
