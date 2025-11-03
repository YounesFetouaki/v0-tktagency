"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { battleLogs } from "@/lib/battle-log-data"
import { Swords, CheckCircle, XCircle, MinusCircle, Users } from "lucide-react"

export function BattleLog() {
  const getResultIcon = (result: string) => {
    switch (result) {
      case "victory":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "defeat":
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <MinusCircle className="h-5 w-5 text-yellow-500" />
    }
  }

  const getResultColor = (result: string) => {
    switch (result) {
      case "victory":
        return "default"
      case "defeat":
        return "destructive"
      default:
        return "secondary"
    }
  }

  return (
    <section className="py-16 bg-muted/30" id="battle-log">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-4">
            <Swords className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">OPERATIONS ARCHIVE</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 font-mono">Battle Log</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Rally records and combat analysis for strategic improvement
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {battleLogs.map((log) => (
            <Card key={log.id} className="border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {getResultIcon(log.result)}
                      <CardTitle className="text-xl font-mono">{log.eventType}</CardTitle>
                      <Badge variant={getResultColor(log.result) as any} className="font-mono text-xs">
                        {log.result.toUpperCase()}
                      </Badge>
                    </div>
                    <CardDescription className="font-mono text-xs">
                      {new Date(log.date).toLocaleDateString()} • Led by {log.rallyLeader}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground font-mono">Target:</span>
                    <p className="font-semibold font-mono">{log.target}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-mono">Damage Dealt:</span>
                    <p className="font-semibold font-mono">{log.damageDealt.toLocaleString()}</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground font-mono">
                      Participants ({log.participants.length}):
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {log.participants.map((participant, index) => (
                      <Badge key={index} variant="outline" className="font-mono text-xs">
                        {participant}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-border">
                  <span className="text-xs text-muted-foreground font-mono">Notes:</span>
                  <p className="text-sm mt-1">{log.notes}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
