"use client"

import { useState, useEffect } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AnnouncementsManager() {
  const [announcements, setAnnouncements] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingAnnouncement, setEditingAnnouncement] = useState<any>(null)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    priority: "normal",
  })
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    fetchAnnouncements()
  }, [])

  const fetchAnnouncements = async () => {
    try {
      const { data, error } = await supabase.from("announcements").select("*").order("created_at", { ascending: false })

      if (error) throw error
      setAnnouncements(data || [])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleAdd = () => {
    setEditingAnnouncement(null)
    setFormData({
      title: "",
      content: "",
      author: "",
      priority: "normal",
    })
    setIsDialogOpen(true)
  }

  const handleEdit = (announcement: any) => {
    setEditingAnnouncement(announcement)
    setFormData({
      title: announcement.title || "",
      content: announcement.content || "",
      author: announcement.author || "",
      priority: announcement.priority || "normal",
    })
    setIsDialogOpen(true)
  }

  const handleSave = async () => {
    try {
      if (editingAnnouncement) {
        const { error } = await supabase.from("announcements").update(formData).eq("id", editingAnnouncement.id)
        if (error) throw error
      } else {
        const { error } = await supabase.from("announcements").insert([formData])
        if (error) throw error
      }
      setIsDialogOpen(false)
      fetchAnnouncements()
    } catch (err: any) {
      setError(err.message)
    }
  }

  const deleteAnnouncement = async (id: string) => {
    if (!confirm("Are you sure you want to delete this announcement?")) return

    try {
      const { error } = await supabase.from("announcements").delete().eq("id", id)
      if (error) throw error
      fetchAnnouncements()
    } catch (err: any) {
      setError(err.message)
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading announcements...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">Announcements Management</h2>
          <p className="text-slate-400">Manage alliance announcements</p>
        </div>
        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" />
          Add Announcement
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4">
        {announcements.map((announcement) => (
          <Card key={announcement.id} className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-white">{announcement.title}</CardTitle>
                  <p className="text-sm text-slate-400 mt-2">{announcement.content}</p>
                  <p className="text-xs text-slate-500 mt-2">
                    By {announcement.author} • {new Date(announcement.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(announcement)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => deleteAnnouncement(announcement.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingAnnouncement ? "Edit Announcement" : "Add New Announcement"}</DialogTitle>
            <DialogDescription>
              {editingAnnouncement ? "Update the announcement details." : "Create a new announcement for the alliance."}
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
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="bg-slate-800 border-slate-700"
                rows={5}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="bg-slate-800 border-slate-700"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="priority">Priority</Label>
              <Select
                value={formData.priority}
                onValueChange={(value) => setFormData({ ...formData, priority: value })}
              >
                <SelectTrigger className="bg-slate-800 border-slate-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>{editingAnnouncement ? "Update" : "Create"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
