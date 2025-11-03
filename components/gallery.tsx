"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { galleryItems } from "@/lib/gallery-data"
import { ImageIcon, Swords, Flag, Trophy, Laugh } from "lucide-react"
import Image from "next/image"

export function Gallery() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredItems = activeTab === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeTab)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "rally":
        return <Swords className="h-4 w-4" />
      case "capture":
        return <Flag className="h-4 w-4" />
      case "war":
        return <Trophy className="h-4 w-4" />
      case "meme":
        return <Laugh className="h-4 w-4" />
      default:
        return <ImageIcon className="h-4 w-4" />
    }
  }

  return (
    <section className="py-16 bg-background" id="gallery">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-4">
            <ImageIcon className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">MISSION ARCHIVES</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 font-mono">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Epic moments, legendary battles, and unforgettable memories
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="all" className="font-mono">
                All
              </TabsTrigger>
              <TabsTrigger value="rally" className="font-mono">
                Rallies
              </TabsTrigger>
              <TabsTrigger value="capture" className="font-mono">
                Captures
              </TabsTrigger>
              <TabsTrigger value="war" className="font-mono">
                Wars
              </TabsTrigger>
              <TabsTrigger value="meme" className="font-mono">
                Memes
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab}>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((item) => (
                  <Card
                    key={item.id}
                    className="border-primary/20 overflow-hidden hover:border-primary/40 transition-colors"
                  >
                    <div className="relative aspect-video bg-muted">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg font-mono">{item.title}</CardTitle>
                        <Badge variant="outline" className="font-mono text-xs">
                          {getCategoryIcon(item.category)}
                          <span className="ml-1">{item.category}</span>
                        </Badge>
                      </div>
                      <CardDescription className="text-xs font-mono">
                        {new Date(item.date).toLocaleDateString()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
