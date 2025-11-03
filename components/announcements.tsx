"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { announcements } from "@/lib/announcement-data"
import { Megaphone, AlertTriangle, Info } from "lucide-react"

export function Announcements() {
  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      case "medium":
        return <Info className="h-4 w-4 text-yellow-500" />
      default:
        return <Info className="h-4 w-4 text-blue-500" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive"
      case "medium":
        return "default"
      default:
        return "secondary"
    }
  }

  return (
    <section className="py-16 bg-muted/30" id="announcements">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-4">
            <Megaphone className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">COMMAND CENTER</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 font-mono">Announcements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Latest updates and directives from alliance leadership
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {getPriorityIcon(announcement.priority)}
                      <CardTitle className="text-xl font-mono">{announcement.title}</CardTitle>
                    </div>
                    <CardDescription className="font-mono text-xs">
                      Posted by {announcement.author} • {new Date(announcement.date).toLocaleDateString()}
                    </CardDescription>
                  </div>
                  <Badge variant={getPriorityColor(announcement.priority) as any} className="font-mono text-xs">
                    {announcement.priority.toUpperCase()}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{announcement.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
