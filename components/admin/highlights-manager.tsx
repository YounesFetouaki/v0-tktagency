"use client"

import { useState, useEffect } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Pencil, Trash2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function HighlightsManager() {
  const [highlights, setHighlights] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingHighlight, setEditingHighlight] = useState<any>(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
    member_name: "",
  })
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

  const handleAdd = () => {
    setEditingHighlight(null)
    setFormData({
      title: "",
      description: "",
      image_url: "",
      member_name: "",
    })
    setIsDialogOpen(true)
  }

  const handleEdit = (highlight: any) => {
    setEditingHighlight(highlight)
    setFormData({
      title: highlight.title || "",
      description: highlight.description || "",
      image_url: highlight.image_url || "",
      member_name: highlight.member_name || "",
    })
    setIsDialogOpen(true)
  }

  const handleSave = async () => {
    try {
      if (editingHighlight) {
        const { error } = await supabase.from("community_highlights").update(formData).eq("id", editingHighlight.id)
        if (error) throw error
      } else {
        const { error } = await supabase.from("community_highlights").insert([formData])
        if (error) throw error
      }
      setIsDialogOpen(false)
      fetchHighlights()
    } catch (err: any) {
      setError(err.message)
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
          <p className="text-slate-400">Manage funny moments and community highlights</p>
        </div>
        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" />
          Add Highlight
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                  <Button size="sm" variant="outline" onClick={() => handleEdit(highlight)}>
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingHighlight ? "Edit Highlight" : "Add New Highlight"}</DialogTitle>
            <DialogDescription>
              {editingHighlight ? "Update the highlight details." : "Add a new community highlight or funny moment."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="bg-slate-800 border-slate-700"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-slate-800 border-slate-700"
                rows={3}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image_url">Image URL</Label>
              <Input
                id="image_url"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                className="bg-slate-800 border-slate-700"
                placeholder="/highlight-image.jpg"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="member_name">Member Name (Optional)</Label>
              <Input
                id="member_name"
                value={formData.member_name}
                onChange={(e) => setFormData({ ...formData, member_name: e.target.value })}
                className="bg-slate-800 border-slate-700"
                placeholder="Featured member"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>{editingHighlight ? "Update" : "Create"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
