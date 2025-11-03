"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Calendar } from "lucide-react"

interface EventTimer {
  name: string
  date: Date
  description: string
}

export function EventCountdown() {
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: string }>({})

  const upcomingEvents: EventTimer[] = [
    {
      name: "Viking Vengeance",
      date: new Date("2025-03-27T19:00:00"),
      description: "Defend against 20 waves of Viking attacks",
    },
    {
      name: "Bear Hunt",
      date: new Date("2025-03-28T20:00:00"),
      description: "Rally bears for massive rewards",
    },
    {
      name: "Swordland Showdown",
      date: new Date("2025-03-29T18:00:00"),
      description: "Capture and hold strategic points",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const newTimeLeft: { [key: string]: string } = {}

      upcomingEvents.forEach((event) => {
        const distance = event.date.getTime() - now

        if (distance > 0) {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24))
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          const seconds = Math.floor((distance % (1000 * 60)) / 1000)

          newTimeLeft[event.name] = `${days}d ${hours}h ${minutes}m ${seconds}s`
        } else {
          newTimeLeft[event.name] = "Event Started!"
        }
      })

      setTimeLeft(newTimeLeft)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-background" id="countdown">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-4">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">MISSION TIMERS</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 font-mono">Event Countdown</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Prepare for upcoming events and operations</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {upcomingEvents.map((event) => (
            <Card key={event.name} className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl font-mono">{event.name}</CardTitle>
                </div>
                <CardDescription className="text-xs font-mono">{event.date.toLocaleString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold font-mono text-primary">
                    {timeLeft[event.name] || "Calculating..."}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
