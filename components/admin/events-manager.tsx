"use client"

import { useState, useEffect } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Pencil, Trash2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
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

export function EventsManager() {
  const [events, setEvents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingEvent, setEditingEvent] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    category: "",
    frequency: "",
    rewards: "",
    image: "", // Changed from image_url to image to match database schema
  })
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase.from("events").select("*").order("created_at", { ascending: false })

      if (error) throw error
      setEvents(data || [])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleAdd = () => {
    setEditingEvent(null)
    setFormData({
      name: "",
      slug: "",
      description: "",
      category: "",
      frequency: "",
      rewards: "",
      image: "", // Changed from image_url to image
    })
    setIsDialogOpen(true)
  }

  const handleEdit = (event: any) => {
    setEditingEvent(event)
    setFormData({
      name: event.name || "",
      slug: event.slug || "",
      description: event.description || "",
      category: event.category || "",
      frequency: event.frequency || "",
      rewards: event.rewards || "",
      image: event.image || "", // Changed from image_url to image
    })
    setIsDialogOpen(true)
  }

  const handleSave = async () => {
    try {
      if (editingEvent) {
        // Update existing event
        const { error } = await supabase.from("events").update(formData).eq("id", editingEvent.id)
        if (error) throw error
      } else {
        // Create new event - generate slug from name if not provided
        const dataToInsert = {
          ...formData,
          slug: formData.slug || formData.name.toLowerCase().replace(/\s+/g, "-"),
        }
        const { error } = await supabase.from("events").insert([dataToInsert])
        if (error) throw error
      }
      setIsDialogOpen(false)
      fetchEvents()
    } catch (err: any) {
      setError(err.message)
    }
  }

  const deleteEvent = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return

    try {
      const { error } = await supabase.from("events").delete().eq("id", id)
      if (error) throw error
      fetchEvents()
    } catch (err: any) {
      setError(err.message)
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading events...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">Events Management</h2>
          <p className="text-slate-400">Manage all game events and guides</p>
        </div>
        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" />
          Add Event
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4">
        {events.map((event) => (
          <Card key={event.id} className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-white">{event.name}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(event)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => deleteEvent(event.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 text-sm text-slate-400">
                <span>Category: {event.category}</span>
                <span>Frequency: {event.frequency}</span>
                <span>Rewards: {event.rewards}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingEvent ? "Edit Event" : "Add New Event"}</DialogTitle>
            <DialogDescription>
              {editingEvent ? "Update the event information below." : "Fill in the details to create a new event."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Event Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-slate-800 border-slate-700"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="slug">Slug (URL-friendly name)</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="bg-slate-800 border-slate-700"
                placeholder="auto-generated if empty"
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
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="bg-slate-800 border-slate-700"
                placeholder="e.g., PvE, PvP, Alliance"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="frequency">Frequency</Label>
              <Input
                id="frequency"
                value={formData.frequency}
                onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                className="bg-slate-800 border-slate-700"
                placeholder="e.g., Daily, Weekly, Bi-weekly"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="rewards">Rewards</Label>
              <Input
                id="rewards"
                value={formData.rewards}
                onChange={(e) => setFormData({ ...formData, rewards: e.target.value })}
                className="bg-slate-800 border-slate-700"
                placeholder="e.g., Resources, Speedups, Hero XP"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image">Image URL (Optional)</Label>
              <Input
                id="image"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="bg-slate-800 border-slate-700"
                placeholder="/event-image.jpg"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>{editingEvent ? "Update" : "Create"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
