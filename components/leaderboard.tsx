"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { members } from "@/lib/member-data"
import { Trophy, TrendingUp, Target, Award } from "lucide-react"

export function Leaderboard() {
  const [activeTab, setActiveTab] = useState("power")

  const sortedByPower = [...members].sort((a, b) => b.power - a.power)
  const sortedByEvents = [...members].sort((a, b) => b.eventPoints - a.eventPoints)
  const sortedByContributions = [...members].sort((a, b) => b.contributions - a.contributions)

  const getMedalIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Award className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Award className="h-5 w-5 text-gray-400" />
      case 3:
        return <Award className="h-5 w-5 text-amber-700" />
      default:
        return null
    }
  }

  const renderLeaderboard = (sortedMembers: typeof members, valueKey: keyof (typeof members)[0], label: string) => (
    <div className="space-y-3">
      {sortedMembers.map((member, index) => (
        <Card key={member.id} className={`border-primary/20 ${index < 3 ? "bg-primary/5" : ""}`}>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted font-bold font-mono text-lg">
                {index < 3 ? getMedalIcon(index + 1) : `#${index + 1}`}
              </div>
              <div className="flex-1">
                <div className="font-semibold font-mono">{member.nickname}</div>
                <div className="text-xs text-muted-foreground font-mono">{member.role}</div>
              </div>
              <div className="text-right">
                <div className="font-bold font-mono text-lg text-primary">
                  {valueKey === "power"
                    ? `${((member[valueKey] as number) / 1000000).toFixed(1)}M`
                    : valueKey === "contributions"
                      ? `${member[valueKey]}%`
                      : (member[valueKey] as number).toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground font-mono">{label}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <section className="py-16 bg-background" id="leaderboard">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-4">
            <Trophy className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">RANKINGS</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 font-mono">Leaderboard</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Alliance rankings across power, events, and contributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="power" className="font-mono">
                <TrendingUp className="h-4 w-4 mr-2" />
                Power
              </TabsTrigger>
              <TabsTrigger value="events" className="font-mono">
                <Trophy className="h-4 w-4 mr-2" />
                Event Points
              </TabsTrigger>
              <TabsTrigger value="contributions" className="font-mono">
                <Target className="h-4 w-4 mr-2" />
                Contributions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="power">{renderLeaderboard(sortedByPower, "power", "Total Power")}</TabsContent>

            <TabsContent value="events">{renderLeaderboard(sortedByEvents, "eventPoints", "Event Points")}</TabsContent>

            <TabsContent value="contributions">
              {renderLeaderboard(sortedByContributions, "contributions", "Contribution Rate")}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
