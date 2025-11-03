"use client"

import { useState, useEffect } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Pencil, Trash2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Image from "next/image"

export function CommunityHighlightsManager() {
  const [highlights, setHighlights] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    fetchHighlights()
  }, [])

  const fetchHighlights = async () => {
    try {
      const { data, error } = await supabase
        .from("community_highlights")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) throw error
      setHighlights(data || [])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const deleteHighlight = async (id: string) => {
    if (!confirm("Are you sure you want to delete this highlight?")) return

    try {
      const { error } = await supabase.from("community_highlights").delete().eq("id", id)
      if (error) throw error
      fetchHighlights()
    } catch (err: any) {
      setError(err.message)
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading highlights...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">Community Highlights Management</h2>
          <p className="text-slate-400">Manage funny moments and memes</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Highlight
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {highlights.map((highlight) => (
          <Card key={highlight.id} className="bg-slate-800/50 border-slate-700 overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={highlight.image_url || "/placeholder.svg"}
                alt={highlight.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-white">{highlight.title}</h3>
                  <p className="text-sm text-slate-400">{highlight.description}</p>
                  {highlight.member_name && (
                    <p className="text-xs text-slate-500 mt-1">Featuring: {highlight.member_name}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => deleteHighlight(highlight.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
