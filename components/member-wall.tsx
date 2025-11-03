"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { members } from "@/lib/member-data"
import { Users, Crown, Shield, Star, TrendingUp, Trophy, Target } from "lucide-react"

export function MemberWall() {
  return (
    <section className="py-16 bg-background" id="members">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-4">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">ALLIANCE ROSTER</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 font-mono">Member Wall</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Our elite operatives leading the charge in Kingshot</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <Card key={member.id} className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-mono flex items-center gap-2">
                      {member.role.includes("R5") && <Crown className="h-4 w-4 text-yellow-500" />}
                      {member.role.includes("R4") && <Shield className="h-4 w-4 text-blue-500" />}
                      {member.role.includes("R3") && <Star className="h-4 w-4 text-purple-500" />}
                      {member.nickname}
                    </CardTitle>
                    <CardDescription className="font-mono text-xs mt-1">ID: {member.id}</CardDescription>
                  </div>
                  <Badge variant={member.status === "online" ? "default" : "secondary"} className="font-mono text-xs">
                    {member.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground font-mono">Role:</span>
                    <span className="font-semibold font-mono">{member.role}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground font-mono flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" /> Power:
                    </span>
                    <span className="font-semibold font-mono">{(member.power / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground font-mono flex items-center gap-1">
                      <Trophy className="h-3 w-3" /> Event Points:
                    </span>
                    <span className="font-semibold font-mono">{member.eventPoints.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground font-mono flex items-center gap-1">
                      <Target className="h-3 w-3" /> Contributions:
                    </span>
                    <span className="font-semibold font-mono">{member.contributions}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
