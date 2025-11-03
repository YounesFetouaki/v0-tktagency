import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function CommunityHighlights() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4">Community Highlights</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Memorable moments from our alliance members
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src="/steel-spoiikee-sacrifice.png"
                  alt="Steel trolling Spoiikee about troop management"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Steel vs. Spoiikee: The Great Debate</h3>
                <p className="text-sm text-muted-foreground">
                  When Steel calls out Spoiikee for preferring to kill low-tier troops instead of promoting them...
                  "Some of you may die, but it is a sacrifice I'm willing to make!"
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs font-medium px-2 py-1 bg-destructive/10 text-destructive rounded">
                    [TKT] Steel
                  </span>
                  <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded">vs Spoiikee</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src="/steel-rally-goose.png"
                  alt="Steel rallying a goose instead of sanctuary"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Steel's Epic Misclick</h3>
                <p className="text-sm text-muted-foreground">
                  "Steel has rallyed G.O.O.SE.!" - When you accidentally rally a mechanical moose instead of the
                  Sanctuary. Wrong target, Steel!
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs font-medium px-2 py-1 bg-destructive/10 text-destructive rounded">
                    [TKT] Steel
                  </span>
                  <span className="text-xs text-muted-foreground">Oh no! Wrong target!</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src="/spoiike-forgot.png"
                  alt="Spoiike having a forgetful moment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Classic Spoiike Moment</h3>
                <p className="text-sm text-muted-foreground">
                  "OHH SHIT I FORGOT!" - When you realize you forgot to set your rally formation before Bear Hunt
                  starts...
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded">
                    [TKT] Spoiike
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
